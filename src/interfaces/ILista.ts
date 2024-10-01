import { IPersonalizacao } from "./IPersonalizacao";
import { IUsuarioPermitido } from "./IUsuario";

export interface ILista {
    usuarioId: string;
    nome: string;
    tipoListaId: string;
    usuariosPermitidos: IUsuarioPermitido[];
    criadoEm: Date;
    atualizadoEm?: Date;
    personalizacao: IPersonalizacao;
}

import { Document } from 'mongoose';
export interface IListaModal extends Document, ILista { }
