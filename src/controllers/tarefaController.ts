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
    };

    public async buscarTarefas(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { listaId } = req.query;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            };

            if (!listaId || listaId === '') {
                return res.status(400).json({ message: 'Lista é obrigatória.' });
            };

            const lista = await Lista.findById(listaId);

            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            };

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .filter(usuario => usuario.podeEditar === true)
                .map(usuario => usuario.usuarioId);

            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Você não possuí permissão para visualizar tarefas dessa lista.' });
            }

            const tarefas = await Tarefa.find({ listaId: listaId }).populate({
                path: 'prioridadeId',
                model: 'Prioridade',
                select: 'nome usuarioId personalizacao'
            });

            return res.status(200).json({
                lista: lista,
                tarefas: tarefas
            });

        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });
        }
    };

    public async buscarTarefa(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const { listaId } = req.query;
            const { tarefaId } = req.params;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            };

            if (!listaId || listaId === '') {
                return res.status(400).json({ message: 'Lista é obrigatória.' });
            };

            const lista = await Lista.findById(listaId);

            if (!lista) {
                return res.status(404).json({ message: 'Lista não encontrada' });
            };

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .filter(usuario => usuario.podeEditar === true)
                .map(usuario => usuario.usuarioId);

            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Você não possuí permissão para visualizar tarefas dessa lista.' });
            }

            const tarefa = await Tarefa.findById(tarefaId)
                .populate({
                    path: 'prioridadeId',
                    model: 'Prioridade',
                    select: 'nome usuarioId personalizacao'
                })
                .populate({
                    path: 'listaId',
                    model: 'Lista',
                    select: 'nome personalizacao'
                });

            return res.status(200).json(tarefa);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar tarefa', error: error.message });
        }
    };
};

export default new tarefaClass();