import express, { Request, Response } from 'express';
import { uploadToS3 } from '../utils/s3Upload';
import { preserveBody } from '../middlewares/uploadMiddleware';
import { IUpload } from '../interfaces/IAnexo';

const router = express.Router();

router.post('/image', preserveBody('image'), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhuma imagem enviada' });
        }
        const imageUrl: IUpload = await uploadToS3(req.file, 'images');
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Erro ao carregar a imagem:', error);
        res.status(500).json({ error: 'Erro ao carregar a imagem' });
    }
});

router.post('/document', preserveBody('document'), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhum documento enviado' });
        }

        const documentUrl = await uploadToS3(req.file, 'documents');
        res.status(200).json({ documentUrl });
    } catch (error) {
        console.error('Erro ao carregar documento:', error);
        res.status(500).json({ error: 'Erro ao carregar documento' });
    }
});

export default router;
