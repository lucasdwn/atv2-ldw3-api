import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import Prioridade from "../models/prioridadeModel";
import dateService from "../utils/dateService";
import Tarefa from "../models/tarefaModel";
import { getPersonalizacaoAleatoria } from "../utils/personalizacao";


class prioridadeController {

    public async createPrioridade(req: Request, res: Response): Promise<Response> {

        try {

            const { userId, nome, personalizacao } = req.body;

            if (!nome) {
                return res.status(400).json({ message: 'Erro ao criar prioridade', error: 'Nome é obrigatório.' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao criar prioridade', error: 'Usuário não encontrado' });
            }

            const personalizacaoPrioridade = personalizacao ? personalizacao : getPersonalizacaoAleatoria();

            const novaPrioridade = new Prioridade({
                usuarioId: userId,
                nome,
                criadoEm: await dateService.getServiceDate(),
                personalizacao: personalizacaoPrioridade
            });

            const prioridadeSalva = await novaPrioridade.save();


            const prioridadeObj = prioridadeSalva.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Prioridade criada com sucesso",
                prioridade: prioridadeObj
            });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao criar prioridade', error: error.message });
        }
    };

    public async listPrioridades(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao listar prioridades', error: 'Usuário não encontrado' });
            }

            const prioridades = await Prioridade.find({
                $or: [
                    { usuarioId: userId },
                    { usuarioId: 'admin' }
                ]
            });

            const prioridadesTransformadas = prioridades.map((prioridade) => {
                const prioridadesObj = prioridade.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        return ret;
                    }
                });
                return prioridadesObj;
            });

            return res.status(200).json(prioridadesTransformadas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar prioridades', error: error.message });
        }
    };

    public async updatePrioridade(req: Request, res: Response): Promise<Response> {

        try {
            const { prioridadeId } = req.params;
            const { userId, nome, personalizacao } = req.body;

            const prioridade = await Prioridade.findById(prioridadeId)

            if (!prioridade) {
                return res.status(404).json({ message: 'Erro ao atualizar prioridade', error: 'Prioridade não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao atualizar prioridade', error: 'Usuário não encontrado' });
            }

            if (prioridade.usuarioId !== userId) {
                return res.status(404).json({ message: 'Erro ao atualizar prioridade', error: 'Prioridade não pertence ao usuario' });
            }


            prioridade.nome = nome || prioridade.nome;
            prioridade.personalizacao = personalizacao || prioridade.personalizacao;
            prioridade.atualizadoEm = await dateService.getServiceDate();

            await prioridade.save();


            const prioridadeObj = prioridade.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Prioridade atualizada com sucesso",
                prioridade: prioridadeObj
            });
        }
        catch (error: any) {
            return res.status(500).json({ message: 'Erro ao atualizar prioridade', error: error.message });
        }
    };

    public async deletePrioridade(req: Request, res: Response): Promise<Response> {
        try {
            const { prioridadeId } = req.params;
            const { userId } = req.body;

            const prioridade = await Prioridade.findById(prioridadeId)

            if (!prioridade) {
                return res.status(404).json({ message: 'Erro ao deletar prioridade', error: 'Prioridade não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao deletar prioridade', error: 'Usuário não encontrado' });
            }

            if (prioridade.usuarioId !== userId) {
                return res.status(404).json({ message: 'Erro ao deletar prioridade', error: 'Prioridade não pertence ao usuario' });
            }

            const tarefas = await Tarefa.find({ prioridadeId: prioridadeId });

            if (tarefas && tarefas.length > 0) {
                return res.status(404).json({ message: 'Erro ao deletar prioridade', error: 'Remova prioridade das tarefas antes de remove-la' });
            }

            await Prioridade.deleteOne({ _id: prioridadeId })

            return res.status(200).json({ message: 'Prioridade deletada com sucesso' });
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao deletar prioridade', error: error.message });
        }
    };

    public async findOnePrioridade(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { prioridadeId } = req.params;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao listar prioridades', error: 'Usuário não encontrado' });
            }

            const prioridade = await Prioridade.findOne({ _id: prioridadeId, usuarioId: userId });

            if (!prioridade) {
                return res.status(404).json({ message: 'Erro ao listar prioridades', error: 'Propriedade não encontrada' });
            }

            const prioridadeObj = prioridade.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(200).json(prioridadeObj);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar prioridades', error: error.message });
        }
    };


};

export default new prioridadeController();

