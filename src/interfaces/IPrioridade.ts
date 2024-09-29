import { IPersonalizacao } from "./IPersonalizacao";

export interface IPrioridade {
    id?: string;
    usuarioId: string;
    nome: string;
    criadoEm: Date;
    atualizadoEm: Date;
    personalizacao: IPersonalizacao;
}