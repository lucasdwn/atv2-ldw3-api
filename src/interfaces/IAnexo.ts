export interface IAnexo extends IUpload {
    usuarioId: string;
    tarefaId?: string;
    criadoEm: Date;
}

export interface IUpload {
    url: string;
    originalFilename: string;
}

import { Document } from 'mongoose';
export interface IAnexoModal extends Document, IAnexo { }
