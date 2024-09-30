import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import Tarefa from "../models/tarefaModel";
import Prioridade from "../models/prioridadeModel";
import { StatusEnum } from "../enums/tarefasEnum";
import dateService from "../utils/dateService";
import Lista from "../models/listaModel";

class tarefaClass {

    public async createTarefa(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, listaId, titulo, prioridadeId, dataDeVencimento, descricao, subTarefas, anexos } = req.body;

            const usuario = await Usuario.findById(userId);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if (!listaId || listaId === '') {
                return res.status(400).json({ message: 'Lista é obrigatória.' });
            }

            const lista = await Lista.findById(listaId);

            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            }

            if (!prioridadeId || prioridadeId === '') {
                return res.status(400).json({ message: 'Prioridade é obrigatória.' });
            }

            const prioridade = await Prioridade.findById(prioridadeId);
            if (!prioridade) {
                return res.status(404).json({ message: 'Prioridade não encontrada' });
            }

            if (!titulo) {
                return res.status(400).json({ message: 'Titulo é obrigatório.' });
            }

            if (!dataDeVencimento) {
                return res.status(400).json({ message: 'Data de Vencimento é obrigatório.' });
            }


            const novaTarefa = new Tarefa({
                listaId,
                titulo,
                prioridadeId,
                status: StatusEnum.Pendente,
                dataDeVencimento,
                criadoEm: await dateService.getServiceDate()
            });

            if (descricao) {
                novaTarefa.descricao = descricao;
            }

            if (subTarefas) {
                novaTarefa.subTarefas = subTarefas;
            }

            if (anexos) {
                novaTarefa.anexos = anexos;
            }

            const tarefaSalva = await novaTarefa.save();

            const tarefaObj = tarefaSalva.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Tarefa criada com sucesso",
                tarefa: tarefaObj
            });

        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ message: 'Erro ao criar lista', error: error.message })
        }
    }

};

export default new tarefaClass();