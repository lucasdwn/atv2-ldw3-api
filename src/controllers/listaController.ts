import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import Lista from "../models/listaModel";
import dateService from "../utils/dateService";
import { personalizacaoPredefinidaLista } from "../interfaces/ILista";

class listaClass {
    public async createLista(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, nome, personalizacao, usuariosPermitidos } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!nome) {
                return res.status(400).json({ message: 'Nome é obrigatório.' });
            }

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const personalizacaoLista = personalizacao ? personalizacao : personalizacaoPredefinidaLista;

            const novaLista = new Lista({
                usuarioId: userId,
                nome,
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

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const listas = await Lista.find({ usuarioId: userId });

            return res.status(200).json(listas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar listas', error: error.message });
        }
    };

    public async buscarListasCompartilhadasComUser(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const listas = await Lista.find({ "usuariosPermitidos.usuarioId": userId });

            return res.status(200).json(listas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar listas compartilhadas', error: error.message });
        }
    };

    public async updateLista(req: Request, res: Response): Promise<Response> {

        try {
            const { listaID } = req.params;
            const { userId, nome, personalizacao, usuariosPermitidos } = req.body;

            const lista = await Lista.findById(listaID)
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
              
            console.log(usuariosComPermissaoDeEdicao)

            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Usuario não possuí permissão para editar lista' });
            }

            lista.nome = nome || lista.nome;
            lista.personalizacao = personalizacao || lista.personalizacao;
            lista.atualizadoEm = await dateService.getServiceDate();

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

};

export default new listaClass();