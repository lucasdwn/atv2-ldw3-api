import { Request, Response } from 'express';
import Usuario from '../models/usuarioModel';
import criptografia from '../utils/criptografia';

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
                criadoEm: new Date(),
            });

            const usuarioSalvo = await novoUsuario.save();

            return res.status(201).json(usuarioSalvo);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                return res.status(500).json({ message: "Este e-mail já está em uso" });
            } else if (error && error.errors["email"]) {
                return res.status(400).json({ message: error.errors["email"].message });
            } else if (error && error.errors["senha"]) {
                return res.status(400).json({ message: error.errors["senha"].message });
            }
            return res.status(500).json({ message: error.message });
        }
    };

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
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao buscar informações do usuário' });
        }
    }
};


export default new UsuarioController();