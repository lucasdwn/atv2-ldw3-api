import { IPersonalizacao } from "./IPersonalizacao";
import { ITarefa } from "./ITarefa";
import { IUsuarioPermitido } from "./IUsuario";

export interface ILista {
    id?: string;
    usuarioId?: string;
    nome: string;
    tarefas: ITarefa[];
    usuariosPermitidos: IUsuarioPermitido[];
    criadoEm: Date;
    personalizacao: IPersonalizacao;
}