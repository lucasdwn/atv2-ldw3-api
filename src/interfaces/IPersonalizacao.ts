
export interface IPersonalizacao {
    icone: string;
    cor: string;
    atualizadoEm: Date;
}

import { Document } from 'mongoose';
export interface IPersonalizacaoModal extends Document, IPersonalizacao { }
