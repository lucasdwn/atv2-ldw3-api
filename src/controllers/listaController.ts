import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";
import Lista from "../models/listaModel";
import dateService from "../utils/dateService";
import { getPersonalizacaoAleatoria } from "../utils/personalizacao";
import { IUsuarioPermitido } from "../interfaces/IUsuario";
import { IListaModal } from "../interfaces/ILista";

class listaClass {
    public async createLista(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, nome, personalizacao, usuariosPermitidos, tipoListaId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!nome) {
                return res.status(400).json({ message: 'Erro ao criar lista', error: 'Nome é obrigatório.' });
            }

            if (!tipoListaId) {
                return res.status(400).json({ message: 'Erro ao criar lista', error: 'Tipo de Lista é obrigatório.' });
            }

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao criar lista', error: 'Usuário não encontrado' });
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
                const emails = usuariosPermitidos.map((u: any) => u.email.toLowerCase());

                if (emails.includes(usuario.email.toLowerCase())) {
                    return res.status(400).json({
                        message: 'Erro ao atualizar lista',
                        error: 'Você não pode compartilhar a lista com você mesmo'
                    });
                }

                const usuariosEncontrados = await Usuario.find({
                    email: { $in: emails },
                    _id: { $ne: userId }
                });

                const emailsEncontrados = usuariosEncontrados.map(usuario => usuario.email);

                const emailsNaoEncontrados = emails.filter((email: string) => !emailsEncontrados.includes(email));

                if (emailsNaoEncontrados.length > 0) {
                    return res.status(400).json({
                        message: 'Erro ao atualizar lista',
                        error: "Adicione apenas e-mails de usuários que possuem cadastro na aplicação"
                    });
                }

                const usuariosPermitidosObj: IUsuarioPermitido[] = usuariosEncontrados.map(usuarioObj => {
                    const usuarioPermitido = usuariosPermitidos.find((u: any) => u.email === usuarioObj.email);
                    return {
                        usuarioId: usuarioObj.id.toString(),
                        email: usuarioObj.email,
                        podeEditar: usuarioPermitido.podeEditar,
                        criadoEm: usuarioObj.criadoEm,
                        atualizadoEm: usuarioObj.atualizadoEm,
                    };
                });

                novaLista.usuariosPermitidos = usuariosPermitidosObj;
            }

            const listaSalva = await novaLista.save();

            const listaObj = listaSalva.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    if (Array.isArray(ret.usuariosPermitidos)) {
                        ret.usuariosPermitidos = ret.usuariosPermitidos.map(({ usuarioId, ...rest }: { usuarioId: string }) => rest);
                    }
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
            const { page = 1, limit = 10 } = req.query;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao buscar listas', error: 'Usuário não encontrado' });
            }

            const skip = (Number(page) - 1) * Number(limit);

            const listas = await Lista.find({ usuarioId: userId })
                .populate({
                    path: 'tipoListaId',
                    model: 'TipoLista',
                    select: 'nome usuarioId personalizacao'
                })
                .sort({ criadoEm: -1 })
                .skip(skip)
                .limit(Number(limit));

            const totalListas = await Lista.countDocuments({ usuarioId: userId });

            const listasTransformadas = listas.map((lista) => {
                const listasObj = lista.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        if (Array.isArray(ret.usuariosPermitidos)) {
                            ret.usuariosPermitidos = ret.usuariosPermitidos.map(({ usuarioId, ...rest }: { usuarioId: string }) => rest);
                        }
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
            const { page = 1, limit = 10 } = req.query;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao buscar listas compartilhadas', error: 'Usuário não encontrado' });
            }

            const skip = (Number(page) - 1) * Number(limit);

            const listas = await Lista.find({ "usuariosPermitidos.usuarioId": userId })
                .populate({
                    path: 'tipoListaId',
                    model: 'TipoLista',
                    select: 'nome usuarioId personalizacao'
                })
                .sort({ criadoEm: -1 })
                .skip(skip)
                .limit(Number(limit));

            const totalListas = await Lista.countDocuments({ usuarioId: userId });

            const listasTransformadas = listas.map((lista) => {
                const listasObj = lista.toObject({
                    versionKey: false,
                    transform: (doc, ret) => {
                        ret.id = ret._id;
                        delete ret._id;
                        if (Array.isArray(ret.usuariosPermitidos)) {
                            ret.usuariosPermitidos = ret.usuariosPermitidos.map(({ usuarioId, ...rest }: { usuarioId: string }) => rest);
                        }
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
            return res.status(500).json({ message: 'Erro ao buscar listas compartilhadas', error: error.message });
        }
    };

    public async updateLista(req: Request, res: Response): Promise<Response> {

        try {
            const { listaId } = req.params;
            const { userId, nome, personalizacao, usuariosPermitidos, tipoListaId } = req.body;

            const lista = await Lista.findById(listaId)
            if (!lista) {
                return res.status(404).json({ message: 'Erro ao atualizar lista', error: 'Lista não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao atualizar lista', error: 'Usuário não encontrado' });
            }

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .filter(usuario => usuario.podeEditar === true)
                .map(usuario => usuario.usuarioId);


            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Erro ao atualizar lista', error: 'Usuario não possuí permissão para editar lista' });
            }

            lista.nome = nome || lista.nome;
            lista.personalizacao = personalizacao || lista.personalizacao;
            lista.atualizadoEm = await dateService.getServiceDate();
            lista.tipoListaId = tipoListaId || lista.tipoListaId;

            if (usuariosPermitidos) {

                if (lista.usuarioId !== userId) {
                    return res.status(404).json({ message: 'Erro ao atualizar lista', error: 'Usuario não possuí permissão para editar usuarios permitidos.' });
                }

                const emails = usuariosPermitidos.map((u: any) => u.email.toLowerCase());

                if (emails.includes(usuario.email.toLowerCase())) {
                    return res.status(400).json({
                        message: 'Erro ao atualizar lista',
                        error: 'Você não pode compartilhar a lista com você mesmo'
                    });
                }

                const usuariosEncontrados = await Usuario.find({
                    email: { $in: emails },
                    _id: { $ne: userId }
                });

                const emailsEncontrados = usuariosEncontrados.map(usuario => usuario.email);

                const emailsNaoEncontrados = emails.filter((email: string) => !emailsEncontrados.includes(email));

                if (emailsNaoEncontrados.length > 0) {
                    return res.status(400).json({
                        message: 'Erro ao atualizar lista',
                        error: "Adicione apenas e-mails de usuários que possuem cadastro na aplicação"
                    });
                }

                const usuariosPermitidosObj: IUsuarioPermitido[] = usuariosEncontrados.map(usuarioObj => {
                    const usuarioPermitido = usuariosPermitidos.find((u: any) => u.email === usuarioObj.email);
                    return {
                        usuarioId: usuarioObj.id.toString(),
                        email: usuarioObj.email,
                        podeEditar: usuarioPermitido.podeEditar,
                        criadoEm: usuarioObj.criadoEm,
                        atualizadoEm: usuarioObj.atualizadoEm,
                    };
                });

                lista.usuariosPermitidos = usuariosPermitidosObj || lista.usuariosPermitidos;
            }

            await lista.save();


            const listaObj = lista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    if (Array.isArray(ret.usuariosPermitidos)) {
                        ret.usuariosPermitidos = ret.usuariosPermitidos.map(({ usuarioId, ...rest }: { usuarioId: string }) => rest);
                    }
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
                return res.status(404).json({ message: 'Erro ao remover lista', error: 'Lista não encontrada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao remover lista', error: 'Usuário não encontrado' });
            }

            if (lista.usuarioId !== userId) {
                return res.status(404).json({ message: 'Erro ao remover lista', error: 'Usuario não possuí permissão para deletar lista' });
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
                return res.status(404).json({ message: 'Erro ao buscar lista', error: 'Usuário não encontrado' });
            }

            const lista = await Lista.findById(listaId)
                .populate({
                    path: 'tipoListaId',
                    model: 'TipoLista',
                    select: 'nome usuarioId personalizacao'
                });

            if (!lista) {
                return res.status(404).json({ message: 'Erro ao buscar lista', error: 'Lista não encontrada' });
            }

            const usuariosComPermissaoDeEdicao = lista.usuariosPermitidos
                .map(usuario => usuario.usuarioId);

            if (lista.usuarioId !== userId && !usuariosComPermissaoDeEdicao.includes(userId)) {
                return res.status(404).json({ message: 'Erro ao buscar lista', error: 'Você não possuí permissão para visualizar essa lista.' });
            }

            const listaObj = lista.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    if (Array.isArray(ret.usuariosPermitidos)) {
                        ret.usuariosPermitidos = ret.usuariosPermitidos.map(({ usuarioId, ...rest }: { usuarioId: string }) => rest);
                    }
                    return ret;
                }
            }) as IListaModal & { isEditUsuarios?: boolean }

            if (lista.usuarioId === userId) {
                listaObj.isEditUsuarios = true;
            }

            return res.status(200).json(listaObj);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar lista', error: error.message });
        }
    };
};

export default new listaClass();