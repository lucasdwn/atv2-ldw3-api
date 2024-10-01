import { IPersonalizacao } from "./IPersonalizacao";

export interface ITipoLista {
    usuarioId: string;
    nome: string;
    criadoEm: Date;
    atualizadoEm?: Date;
    personalizacao: IPersonalizacao;
}

import { Document } from 'mongoose';
export interface ITipoListaModal extends Document, ITipoLista { }
