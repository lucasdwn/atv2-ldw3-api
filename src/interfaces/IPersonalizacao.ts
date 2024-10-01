export interface IPersonalizacao {
    icone: string;
    cor: string;
    criadoEm: Date;
    atualizadoEm?: Date;
};

import { Document } from 'mongoose';
export interface IPersonalizacaoModal extends Document, IPersonalizacao { }
