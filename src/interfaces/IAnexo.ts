export interface IAnexo {
    usuarioId: string;
    tarefaId?: string;
    url: string;
    criadoEm: Date;
}

import { Document } from 'mongoose';
export interface IAnexoModal extends Document, IAnexo { }
