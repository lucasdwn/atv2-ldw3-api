import { S3Client, PutObjectCommand, ObjectCannedACL } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const s3 = new S3Client({ region: process.env.AWS_REGION });

export const uploadToS3 = async (file: Express.Multer.File, folder: string) => {
    const fileExtension = path.extname(file.originalname);

    const newFileName = `${uuidv4()}${fileExtension}`;

    const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: `${folder}/${newFileName}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read' as ObjectCannedACL
    };

    const command = new PutObjectCommand(uploadParams);
    await s3.send(command);

    return {
        url: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${uploadParams.Key}`,
        originalFilename: file.originalname
    };
};
