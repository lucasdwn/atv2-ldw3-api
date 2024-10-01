import { IPrioridade } from "../interfaces/IPrioridade";
import { ITipoLista } from "../interfaces/ITipoLista";
import Prioridade from "../models/prioridadeModel"
import TipoLista from "../models/tipoListaModel";
import dateService from "../utils/dateService";

async function seedDatabase() {

    try {
        const dataAtual = await dateService.getServiceDate()

        const exinstingPrioridades = await Prioridade.find({});
        if (exinstingPrioridades.length === 0) {
            const prioridades: IPrioridade[] = [
                { usuarioId: 'admin', nome: 'Alta', criadoEm: dataAtual, personalizacao: { icone: '🔴', cor: '#FF3D00', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Média', criadoEm: dataAtual, personalizacao: { icone: '🟡', cor: '#FFD600', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Baixa', criadoEm: dataAtual, personalizacao: { icone: '🟢', cor: '#4CAF50', criadoEm: new Date() } },
            ];
            await Prioridade.insertMany(prioridades)
            console.log("Prioridades criadas com sucesso!")
        };

        const existingTiposLista = await TipoLista.find({});
        if (existingTiposLista.length === 0) {
            const tiposDeLista: ITipoLista[] = [
                { usuarioId: 'admin', nome: 'Tarefas', criadoEm: dataAtual, personalizacao: { icone: '📝', cor: '#1E88E5', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Projetos', criadoEm: dataAtual, personalizacao: { icone: '📁', cor: '#673AB7', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Compras', criadoEm: dataAtual, personalizacao: { icone: '🛒', cor: '#FF5722', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Metas', criadoEm: dataAtual, personalizacao: { icone: '🎯', cor: '#009688', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Ideias', criadoEm: dataAtual, personalizacao: { icone: '💡', cor: '#FFEB3B', criadoEm: new Date() } },
            ];
            await TipoLista.insertMany(tiposDeLista);
            console.log("Tipos de listas criados com sucesso!")
        }

    } catch (error) {
        console.log("Erro ao seedar o banco de dados:", error)
    }
}

export default seedDatabase;