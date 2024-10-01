import { Request, Response } from "express";
import { uploadToS3 } from "../utils/s3Upload";
import { IAnexo, IUpload } from "../interfaces/IAnexo";
import Usuario from "../models/usuarioModel";
import Anexo from "../models/anexoModel";
import dateService from "../utils/dateService";

class anexoClass {

    public async uploadImagem(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, tarefaId } = req.body;

            if (!req.file) {
                return res.status(400).json({ message: 'Erro ao realizar upload', error: 'Nenhuma imagem enviada' });
            }

            const usuario = await Usuario.findById(userId);

            if (!usuario) {
                return res.status(404).json({ message: 'Erro ao realizar upload', error: 'Usuário não encontrado' });
            }

            const imagemUpload: IUpload = await uploadToS3(req.file, 'images');

            const anexo = await createAnexo(imagemUpload, userId, tarefaId);

            return res.status(201).json({
                message: "Upload realizado com sucesso",
                anexo: anexo
            });

        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ message: 'Erro ao realizar upload', error: 'Erro ao carregar imagem'})
        }
    }

    public async uploadDocumento(req: Request, res: Response): Promise<Response> {
        try {

            const { userId, tarefaId } = req.body;

            if (!req.file) {
                return res.status(400).json({ message: 'Erro ao realizar upload', error: 'Nenhum documento enviado' });
            }

            const documentoUpload: IUpload = await uploadToS3(req.file, 'documents');

            const anexo = await createAnexo(documentoUpload, userId, tarefaId);

            return res.status(201).json({
                message: "Upload realizado com sucesso",
                anexo: anexo
            });

        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao carregar documento', error: error.message })
        }
    }
};

export default new anexoClass();

export const createAnexo = async (upload: IUpload, userId: String, tarefaId?: string): Promise<IAnexo> => {
    const novoAnexo = new Anexo({
        usuarioId: userId,
        url: upload.url,
        originalFilename: upload.originalFilename,
        criadoEm: await dateService.getServiceDate()
    });

    if (tarefaId) {
        novoAnexo.tarefaId = tarefaId;
    }

    const anexoSalvo = await novoAnexo.save();


    const anexoObj = anexoSalvo.toObject({
        versionKey: false,
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            return ret;
        }
    });

    return anexoObj;
};


