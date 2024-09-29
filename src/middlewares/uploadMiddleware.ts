import multer from 'multer';
import { Request, Response, NextFunction } from 'express';

const IMAGE_SIZE_LIMIT = 5 * 1024 * 1024;
const DOCUMENT_SIZE_LIMIT = 10 * 1024 * 1024;

const imageFileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid image type. Only JPEG, PNG, and GIF are allowed.'));
    }
};

const documentFileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid document type. Only PDF, DOC, and DOCX are allowed.'));
    }
};

const multerStorage = multer.memoryStorage();

const imageUpload = multer({
    storage: multerStorage,
    limits: { fileSize: IMAGE_SIZE_LIMIT },
    fileFilter: imageFileFilter
});

const documentUpload = multer({
    storage: multerStorage,
    limits: { fileSize: DOCUMENT_SIZE_LIMIT },
    fileFilter: documentFileFilter
});

const preserveBody = (type: 'image' | 'document') => {
    return (req: Request, res: Response, next: NextFunction) => {
        const originalBody = { ...req.body }; 

        if (type === 'image') {
            imageUpload.single('image')(req, res, (err: any) => {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                req.body = { ...originalBody, ...req.body }; 
                next();
            });
        } else if (type === 'document') {
            documentUpload.single('document')(req, res, (err: any) => {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                req.body = { ...originalBody, ...req.body }; 
                next();
            });
        } else {
            return res.status(400).json({ message: 'Invalid upload type' });
        }
    };
};

export { preserveBody };
