import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Erro ao realizar autenticação', error: 'Token não fornecido' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Erro ao realizar autenticação', error: 'Token inválido' });
        }

        req.body.userId = (decoded as any).userId;
        next();
    });
};

export default authMiddleware;