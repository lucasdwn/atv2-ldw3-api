import { IPersonalizacao } from "./IPersonalizacao";
import { ITarefa } from "./ITarefa";
import { IUsuarioPermitido } from "./IUsuario";

export interface ILista {
    usuarioId?: string;
    nome: string;
    tarefas: ITarefa[];
    usuariosPermitidos: IUsuarioPermitido[];
    criadoEm: Date;
    personalizacao: IPersonalizacao;
}

import { Document } from 'mongoose';
export interface IListaModal extends Document, ILista { }
