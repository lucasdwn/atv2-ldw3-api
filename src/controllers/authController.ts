import { Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";
import criptografia from "../utils/criptografia";
import { ObjectId, Types } from "mongoose";
import Usuario from "../models/usuarioModel";

const JWT_SECRET = process.env.JWT_SECRET || "secretKey";
const REFRESH_SECRET = process.env.JWT_SECRET_REFRESH || "secretKeyRefresh";
const JWT_EXPIRES_IN = '5h';
const REFRESH_EXPIRES_IN = '1d';

export function generateToken(userId: Types.ObjectId, email: string) {
    return jwt.sign({ userId: userId.toString(), email: email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function generateRefreshToken(userId: Types.ObjectId, email: string) {
    return jwt.sign({ userId: userId.toString(), email: email }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
}

class AuthController {

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ message: 'Erro ao realizar login', error: "E-mail e senha são obrigatórios" });
            }
            const emailLowerCase = email.toLowerCase();
            const usuario = await Usuario.findOne({ email: emailLowerCase, removidoEm: null }).select("+senha");
            if (!usuario) {
                return res.status(401).json({ message: 'Erro ao realizar login', error: "Usuário não encontrado" });
            }

            const hash = usuario.senha ?? "";
            const senhaCorreta = await criptografia.verificarSenha(senha, hash)
            if (!senhaCorreta) {
                return res.status(401).json({ message: 'Erro ao realizar login', error: "Credenciais inválidas" });
            }

            const token = generateToken(usuario.id, usuario.email)
            const refreshToken = generateRefreshToken(usuario.id, usuario.email);

            const { senha: _, ...userWithoutPassword } = usuario.toObject({
                versionKey: false,
                transform: (doc, ret) => {
                    ret.id = ret._id;
                    delete ret._id;
                    return ret;
                }
            });

            return res.status(200).json({
                message: "Login realizado com sucesso",
                usuario: userWithoutPassword,
                token,
                refreshToken
            });

        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao realizar login', error: error.message });
        }
    }

    public async refresh(req: Request, res: Response): Promise<Response> {
        try {
            const { refreshToken } = req.body;

            if (!refreshToken) {
                return res.status(401).json({ message: 'Erro ao atualizar token', error: 'Refresh token não fornecido' });
            }

            const decoded = jwt.verify(refreshToken, REFRESH_SECRET) as { userId: Types.ObjectId, email: string };

            const newToken = generateToken(decoded.userId, decoded.email);

            const newRefreshToken = generateRefreshToken(decoded.userId, decoded.email);

            return res.json({ token: newToken, refreshToken: newRefreshToken });
        } catch (error: any) {
            return res.status(403).json({ message: 'Refresh token inválido ou expirado', error: error.message });
        }
    }
}

export default new AuthController();
