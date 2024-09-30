import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import { personalizacaoPredefinida } from "../interfaces/IPersonalizacao";
import Prioridade from "../models/prioridadeModel";
import dateService from "../utils/dateService";


class prioridadeController {

    public async createPrioridade(req: Request, res: Response): Promise<Response> {

        try {

            const { userId, nome, personalizacao } = req.body;

            if (!nome) {
                return res.status(400).json({ message: 'Nome é obrigatório.' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const personalizacaoPrioridade = personalizacao ? personalizacao : personalizacaoPredefinida;

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
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const listPrioridades = await Prioridade.find({
                $or: [
                    { usuarioId: userId },
                    { usuarioId: 'admin' }
                ]
            });

            return res.status(200).json(listPrioridades);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar usuários', error: error.message });
        }
    };

    public async updatePrioridade(req: Request, res: Response): Promise<Response> {

        try {
            const { prioridadeId } = req.params;
            const { userId, nome, personalizacao } = req.body;

            const prioridade = await Prioridade.findById(prioridadeId)

            if (!prioridade) {
                return res.status(404).json({ message: 'Prioridade não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if (prioridade.usuarioId !== userId) {
                return res.status(404).json({ message: 'Prioridade não pertence ao usuario' });
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
            return res.status(500).json({ message: 'Erro ao criar prioridade', error: error.message });
        }
    };

};

export default new prioridadeController();

