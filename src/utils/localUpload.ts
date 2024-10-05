import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const UPLOADS_FOLDER = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

export const uploadToLocal = (file: Express.Multer.File, folder: string): { url: string, originalFilename: string } => {
    const fileExtension = path.extname(file.originalname);
    const newFileName = `${uuidv4()}${fileExtension}`;
    const destination = path.join(UPLOADS_FOLDER, folder, newFileName);

    const folderPath = path.join(UPLOADS_FOLDER, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.writeFileSync(destination, file.buffer);

    const publicUrl = `/uploads/${folder}/${newFileName}`;
    return {
        url: publicUrl,
        originalFilename: file.originalname
    };
};
