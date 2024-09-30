import { StatusEnum } from "../enums/tarefasEnum";
import { IAnexo } from "./IAnexo";
import { IPersonalizacao } from "./IPersonalizacao";
import { IPrioridade } from "./IPrioridade";

export interface ITarefa {
    titulo: string;
    descricao: string;
    ordenacao: number;
    prioridade: IPrioridade;
    status: StatusEnum;
    subTarefas: ISubTarefa[];
    anexos: IAnexo[];
    dataDeVencimento: Date;
    realizadoEm: Date;
    criadoEm: Date;
    personalizacao: IPersonalizacao;
}

export interface ISubTarefa {
    titulo: string;
    descricao: string;
    ordenacao: number;
    criadoEm: Date;
    isFinalizada: boolean;
}

import { Document } from 'mongoose';
export interface ITarefaModal extends Document, ITarefa { }
export interface ISubTarefaModal extends Document, ISubTarefa { }