import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import dateService from "../utils/dateService";
import TipoLista from "../models/tipoListaModel";
import Lista from "../models/listaModel";
import { getPersonalizacaoAleatoria } from "../utils/personalizacao";

class tipoListaController {

    public async createLista(req: Request, res: Response): Promise<Response> {

        try {

            const { userId, nome, personalizacao } = req.body;

            if (!nome) {
                return res.status(400).json({ message: 'Erro ao criar tipo Tipo de Lista', error: 'Nome é obrigatório.' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao criar tipo Tipo de Lista', error: 'Usuário não encontrado' });
            }

            const personalizacaoTipoLista = personalizacao ? personalizacao : getPersonalizacaoAleatoria();

            const novoTipoLista = new TipoLista({
                usuarioId: userId,
                nome,
                criadoEm: await dateService.getServiceDate(),
                personalizacao: personalizacaoTipoLista
            });

            const tipoListaSalva = await novoTipoLista.save();


            const tipoListaObj = tipoListaSalva.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Tipo de Lista criado com sucesso",
                tipoLista: tipoListaObj
            });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao criar tipo Tipo de Lista', error: error.message });
        }
    };

    public async listTipoListas(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { search, limit = 10 } = req.query;

            const usuario = await Usuario.findById(userId);
            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao listar Tipos de lista', error: 'Usuário não encontrado' });
            }

            const tiposLista = await TipoLista.find({
                $or: [
                    { usuarioId: userId },
                    { usuarioId: 'admin' }
                ],
                ...(search ? { nome: { $regex: search, $options: 'i' } } : {})
            }).limit(Number(limit));

            const tiposListaTransformadas = tiposLista.map((tipoLista) => {
                const tipoListaObj = tipoLista.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        return ret;
                    }
                });
                return tipoListaObj;
            });

            return res.status(200).json(tiposListaTransformadas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar Tipos de lista', error: error.message });
        }
    }


    public async updateTipoLista(req: Request, res: Response): Promise<Response> {

        try {
            const { tipoListaId } = req.params;
            const { userId, nome, personalizacao } = req.body;

            const tipoLista = await TipoLista.findById(tipoListaId)

            if (!tipoLista) {
                return res.status(404).json({ message: 'Erro ao atualizar Tipo de lista', error: 'Tipo de lista não encontrado' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao atualizar Tipo de lista', error: 'Usuário não encontrado' });
            }

            if (tipoLista.usuarioId !== userId) {
                return res.status(404).json({ message: 'Erro ao atualizar Tipo de lista', error: 'Tipo de lista não pertence ao usuario' });
            }


            tipoLista.nome = nome || tipoLista.nome;
            tipoLista.personalizacao = personalizacao || tipoLista.personalizacao;
            tipoLista.atualizadoEm = await dateService.getServiceDate();

            await tipoLista.save();


            const tipoListaObj = tipoLista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Tipo de Lista atualizada com sucesso",
                tipoLista: tipoListaObj
            });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao atualizar Tipo de lista', error: error.message });
        }
    };

    public async deleteTipoLista(req: Request, res: Response): Promise<Response> {
        try {
            const { tipoListaId } = req.params;
            const { userId } = req.body;

            const tipoLista = await TipoLista.findById(tipoListaId)

            if (!tipoLista) {
                return res.status(404).json({ message: 'Erro ao deletar Tipo de lista', error: 'Tipo de lista não encontrado' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao deletar Tipo de lista', error: 'Usuário não encontrado' });
            }

            if (tipoLista.usuarioId !== userId) {
                return res.status(404).json({ message: 'Erro ao deletar Tipo de lista', error: 'Tipo de lista não pertence ao usuario' });
            }

            const listas = await Lista.find({ tipoListaId: tipoListaId });

            if (listas && listas.length > 0) {
                return res.status(404).json({ message: 'Erro ao deletar Tipo de lista', error: 'Remova Tipo de lista das listas antes de remove-lo' });
            }

            await TipoLista.deleteOne({ _id: tipoListaId })

            return res.status(200).json({ message: 'Tipo de lista deletada com sucesso' });
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao deletar Tipo de lista', error: error.message });
        }
    };

    public async findOneTipoLista(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { tipoListaId } = req.params;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao listar Tipos de lista', error: 'Usuário não encontrado' });
            }

            const tipoLista = await TipoLista.findOne({ _id: tipoListaId, usuarioId: userId });

            if (!tipoLista) {
                return res.status(404).json({ message: 'Erro ao listar Tipos de lista', error: 'Tipo de lista não encontrado' });
            }

            const tipoListaObj = tipoLista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(200).json(tipoListaObj);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar Tipos de lista', error: error.message });
        }
    };


};

export default new tipoListaController();

