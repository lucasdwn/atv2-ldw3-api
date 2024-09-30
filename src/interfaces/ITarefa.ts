import { StatusEnum } from "../enums/tarefasEnum";
import { IAnexo } from "./IAnexo";

export interface ITarefa {
    listaId: string;
    titulo: string;
    descricao: string;
    ordenacao: number;
    prioridadeId: string;
    status: StatusEnum;
    subTarefas: ISubTarefa[];
    anexos: IAnexo[];
    dataDeVencimento: Date;
    realizadoEm: Date;
    criadoEm: Date;
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