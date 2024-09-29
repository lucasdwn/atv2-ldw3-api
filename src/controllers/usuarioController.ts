import { Request, Response } from 'express';
import Usuario from '../models/usuarioModel';
import criptografia from '../utils/criptografia';
import { generateRefreshToken, generateToken } from './authController';
import dateService from '../utils/dateService';

class UsuarioController {

    public async createUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, email, senha } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
            }

            if (senha) {
                if (senha.length < 6) {
                    return res.status(400).json({ message: "A senha precisa ter no mínimo 6 caracteres" });
                }
                else if (senha.length > 20) {
                    return res.status(400).json({ message: "A senha precisa ter no máximo 20 caracteres" });
                }
            }

            const emailExistente = await Usuario.findOne({ email });
            if (emailExistente) {
                return res.status(400).json({ message: 'Email já está em uso.' });
            }

            const senhaCriptografada = await criptografia.criptografarSenha(senha);

            const novoUsuario = new Usuario({
                nome,
                email,
                senha: senhaCriptografada,
                criadoEm: await dateService.getServiceDate(),
            });

            const usuarioSalvo = await novoUsuario.save();

            const token = generateToken(usuarioSalvo.id, usuarioSalvo.email);
            const refreshToken = generateRefreshToken(usuarioSalvo.id, usuarioSalvo.email);

            const { senha: _, ...userWithoutPassword } = usuarioSalvo.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(201).json({
                message: "Usuário criado com sucesso",
                usuario: userWithoutPassword,
                token,
                refreshToken
            });
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                return res.status(500).json({ message: 'Erro ao criar usuário', error: "Este e-mail já está em uso" });
            } else if (error && error.errors["email"]) {
                return res.status(400).json({ message: 'Erro ao criar usuário', error: error.errors["email"].message });
            } else if (error && error.errors["senha"]) {
                return res.status(400).json({ message: 'Erro ao criar usuário', error: error.errors["senha"].message });
            }
            return res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
        }
    };

    public async updateUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, email, senha, userId } = req.body;

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if (senha) {
                if (senha.length < 6) {
                    return res.status(400).json({ message: "A senha precisa ter no mínimo 6 caracteres" });
                }
                else if (senha.length > 20) {
                    return res.status(400).json({ message: "A senha precisa ter no máximo 20 caracteres" });
                }

                usuario.senha = await criptografia.criptografarSenha(senha);
            }

            if (email) {
                const emailExistente = await Usuario.findOne({ email, _id: { $ne: userId } });

                if (emailExistente) {
                    return res.status(400).json({ message: 'Email já está em uso.' });
                }
            }

            const profileImageUrl = req.file?.path;
            
            usuario.nome = nome || usuario.nome;
            usuario.email = email || usuario.email;
            usuario.atualizadoEm = await dateService.getServiceDate();
            usuario.profileImage = profileImageUrl || usuario.profileImage;

            await usuario.save();

            const { senha: _, ...userWithoutPassword } = usuario.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });


            return res.status(200).json({ message: 'Usuário atualizado com sucesso', userWithoutPassword });
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                return res.status(500).json({ message: 'Erro ao criar usuário', error: "Este e-mail já está em uso" });
            } else if (error && error.errors["email"]) {
                return res.status(400).json({ message: 'Erro ao criar usuário', error: error.errors["email"].message });
            } else if (error && error.errors["senha"]) {
                return res.status(400).json({ message: 'Erro ao criar usuário', error: error.errors["senha"].message });
            }
            return res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
        }
    };

    public async deleteUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;

            const usuario = await Usuario.findByIdAndDelete(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.status(200).json({ message: 'Usuário removido com sucesso' });
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
        }
    }

    public async listUsuarios(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await Usuario.find();

            return res.status(200).json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar usuários', error: error.message });
        }
    };

    public async getUsuarioById(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar informações do usuário', error: error.message });
        }
    }

    public async getUsuarioAtual(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.body;
            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao buscar informações do usuário', error: error.message });
        }
    }


};


export default new UsuarioController();