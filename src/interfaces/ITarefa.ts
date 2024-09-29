import { StatusEnum } from "../enums/tarefasEnum";
import { IAnexo } from "./IAnexo";
import { IPersonalizacao } from "./IPersonalizacao";
import { IPrioridade } from "./IPrioridade";

export interface ITarefa {
    id?: string;
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
    id?: string;
    titulo: string;
    descricao: string;
    ordenacao: number;
    criadoEm: Date;
    isFinalizada: boolean;
}