export interface IUsuario {
    nome: string;
    email: string;
    senha: string;
    profileImage?: string;
    criadoEm: Date;
    atualizadoEm?: Date;
}

export interface IUsuarioPermitido {
    usuarioId: string;
    email: string;
    podeEditar: boolean;
    criadoEm: Date;
    atualizadoEm?: Date;
}

import { Document } from 'mongoose';
export interface IUsuarioModal extends Document, IUsuario { }
export interface IUsuarioPermitidoModal extends Document, IUsuarioPermitido { }
