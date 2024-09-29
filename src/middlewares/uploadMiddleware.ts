import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const documentStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req: Request, file: Express.Multer.File) => {
        return {
            folder: 'documents',  
            resource_type: 'raw', 
            public_id: `${Date.now()}-${file.originalname}`, 
        };
    },
});

const imageStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req: Request, file: Express.Multer.File) => {
        return {
            folder: 'images',    
            format: 'png',       
            public_id: `${Date.now()}-${file.originalname}`, 
        };
    },
});

export const uploadDocument = multer({
    storage: documentStorage,
    limits: { fileSize: 10 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        cb(null, true);  
    },
}).single('document');

export const uploadImage = multer({
    storage: imageStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);  
        } else {
            cb(null, false)
            cb(new Error('Por favor, envie apenas imagens!')); 
        }
    },
}).single('profileImage');


export const uploadWithUserIdPreservedImage = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.userId; 

    uploadImage(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        req.body.userId = userId;
        next();
    });
};

export const uploadWithUserIdPreservedDocument = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.userId; 

    uploadDocument(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        req.body.userId = userId;
        next();
    });
};