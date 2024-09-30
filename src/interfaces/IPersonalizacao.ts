import dateService from '../utils/dateService';

export interface IPersonalizacao {
    icone: string;
    cor: string;
    criadoEm: Date;
    atualizadoEm?: Date;
};

export const personalizacaoPredefinida: IPersonalizacao = {
    icone: 'ℹ️',
    cor: '#B0BEC5',
    criadoEm: dateService.getServiceDate()
};

import { Document } from 'mongoose';
export interface IPersonalizacaoModal extends Document, IPersonalizacao { }
