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

};

export default new listaClass();