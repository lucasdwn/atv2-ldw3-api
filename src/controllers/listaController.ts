import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import Lista from "../models/listaModel";
import dateService from "../utils/dateService";
import { getPersonalizacaoAleatoria } from "../utils/personalizacao";

class listaClass {
    public async createLista(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, nome, personalizacao, usuariosPermitidos, tipoListaId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!nome) {
                return res.status(400).json({ message: 'Nome é obrigatório.' });
            }

            if (!tipoListaId) {
                return res.status(400).json({ message: 'Tipo de Lista é obrigatório.' });
            }

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const personalizacaoLista = personalizacao ? personalizacao : getPersonalizacaoAleatoria();

            const novaLista = new Lista({
                usuarioId: userId,
                nome,
                tipoListaId,
                criadoEm: await dateService.getServiceDate(),
                personalizacao: personalizacaoLista
            });

            if (usuariosPermitidos) {
                novaLista.usuariosPermitidos = usuariosPermitidos;
            }

            const listaSalva = await novaLista.save();

            const listaObj = listaSalva.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Lista criada com sucesso",
                lista: listaObj
            });

        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ message: 'Erro ao criar lista', error: error.message })
        }
    }

    public async buscarListasUser(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { page = 1, limit = 10 } = req.query; // Pega a página e o limite da query
    
            const usuario = await Usuario.findById(userId);
    
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
    
            const skip = (Number(page) - 1) * Number(limit); // Cálculo para pular os registros
    
            const listas = await Lista.find({ usuarioId: userId })
                .populate({
                    path: 'tipoListaId',
                    model: 'TipoLista',
                    select: 'nome usuarioId personalizacao'
                })
                .sort({ criadoEm: -1 }) // Ordena para trazer os mais recentes
                .skip(skip) // Pula os registros
                .limit(Number(limit)); // Limita a quantidade de registros retornados
    
            const totalListas = await Lista.countDocuments({ usuarioId: userId }); // Conta o total de listas
    
            const listasTransformadas = listas.map((lista) => {
                const listasObj = lista.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        return ret;
                    }
                });
                return listasObj;
            });
    
            return res.status(200).json({
                total: totalListas,
                page: Number(page),
                limit: Number(limit),
                listas: listasTransformadas,
            });
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar listas', error: error.message });
        }
    }
    

    public async buscarListasCompartilhadasComUser(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const listas = await Lista.find({ "usuariosPermitidos.usuarioId": userId })
                .populate({
                    path: 'tipoListaId',
                    model: 'TipoLista',
                    select: 'nome usuarioId personalizacao'
                });

            const listasTransformadas = listas.map((lista) => {
                const listasObj = lista.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        return ret;
                    }
                });
                return listasObj;
            });

            return res.status(200).json(listasTransformadas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar listas compartilhadas', error: error.message });
        }
    };

    public async updateLista(req: Request, res: Response): Promise<Response> {

        try {
            const { listaId } = req.params;
            const { userId, nome, personalizacao, usuariosPermitidos, tipoListaId } = req.body;

            const lista = await Lista.findById(listaId)
            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .filter(usuario => usuario.podeEditar === true)
                .map(usuario => usuario.usuarioId);


            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Usuario não possuí permissão para editar lista' });
            }

            lista.nome = nome || lista.nome;
            lista.personalizacao = personalizacao || lista.personalizacao;
            lista.atualizadoEm = await dateService.getServiceDate();
            lista.tipoListaId = tipoListaId || lista.tipoListaId;

            if (lista.usuarioId === userId) {
                lista.usuariosPermitidos = usuariosPermitidos || lista.usuariosPermitidos
            }

            await lista.save();


            const listaObj = lista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Lista atualizada com sucesso",
                lista: listaObj
            });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao atualizar lista', error: error.message });
        }
    };

    public async deleteLista(req: Request, res: Response): Promise<Response> {

        try {
            const { listaId } = req.params;
            const { userId } = req.body;

            const lista = await Lista.findById(listaId)
            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if (lista.usuarioId !== userId) {
                return res.status(404).json({ message: 'Usuario não possuí permissão para deletar lista' });
            }


            await Lista.deleteOne({ _id: listaId })

            return res.status(200).json({ message: 'Lista removida com sucesso' });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao remover lista', error: error.message });
        }
    };

    public async buscarLista(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { listaId } = req.params;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const lista = await Lista.findById(listaId);

            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            }

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .filter(usuario => usuario.podeEditar === true)
                .map(usuario => usuario.usuarioId);

            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Você não possuí permissão para visualizar essa lista.' });
            }

            const listaObj = lista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(200).json(listaObj);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar lista', error: error.message });
        }
    };
};

export default new listaClass();