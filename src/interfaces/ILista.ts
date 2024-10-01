import dateService from "../utils/dateService";
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

export const personalizacaoPredefinidaLista: IPersonalizacao = {
    icone: '📃',
    cor: '#B0BEC5',
    criadoEm: dateService.getServiceDate()
};

import { Document } from 'mongoose';
export interface IListaModal extends Document, ILista { }
