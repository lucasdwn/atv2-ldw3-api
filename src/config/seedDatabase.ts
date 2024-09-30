import { IPrioridade } from "../interfaces/IPrioridade";
import Prioridade from "../models/prioridadeModel"
import dateService from "../utils/dateService";

async function seedDatabase() {

    try {
        const exinstingPrioridades = await Prioridade.find({});
        if (exinstingPrioridades.length === 0) {
            const dataAtual = await dateService.getServiceDate()
            const prioridades: IPrioridade[] = [
                { usuarioId: 'admin', nome: 'Alta', criadoEm: dataAtual, personalizacao: { icone: '🔴', cor: '#FF3D00', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Média', criadoEm: dataAtual, personalizacao: { icone: '🟡', cor: '#FFD600', criadoEm: new Date() } },
                { usuarioId: 'admin', nome: 'Baixa', criadoEm: dataAtual, personalizacao: { icone: '🟢', cor: '#4CAF50', criadoEm: new Date() } },
            ]
            await Prioridade.insertMany(prioridades)
            console.log("Prioridades criadas com sucesso!")
        }

    } catch (error) {
        console.log("Erro ao seedar o banco de dados:", error)
    }
}

export default seedDatabase;