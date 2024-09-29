import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
import sharp from 'sharp';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
    storage: multer.memoryStorage(), 
    limits: { fileSize: 20 * 1024 * 1024 }, 
});

const compressAndUploadImage = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo encontrado!' });
    }

    try {
        const compressedBuffer = await sharp(req.file.buffer)
            .resize(1024, 1024, { fit: 'inside' }) 
            .png({ quality: 80 })  
            .toBuffer();

        const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'images', format: 'png' },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

            uploadStream.end(compressedBuffer); 
        });

        req.file.path = result.secure_url; 
        next();  

    } catch (error) {
        return res.status(500).json({ message: 'Erro ao comprimir e enviar a imagem' });
    }
};


export const uploadWithUserIdPreservedImage = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.userId; 
    console.log(userId)

    upload.single('profileImage')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        compressAndUploadImage(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao fazer upload com compressão' });
            }
            req.body.userId = userId;
            next();
        });
    });
};

export const uploadWithUserIdPreservedDocument = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.userId; 

    upload.single('document')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        req.body.userId = userId; 
        next();
    });
};
