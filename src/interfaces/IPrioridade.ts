import { IPersonalizacao } from "./IPersonalizacao";

export interface IPrioridade {
    usuarioId: string;
    nome: string;
    criadoEm: Date;
    atualizadoEm: Date;
    personalizacao: IPersonalizacao;
}

import { Document } from 'mongoose';
export interface IPrioridadeModal extends Document, IPrioridade { }
