export interface IUsuario {
    id?: string;
    nome: string;
    email: string;
    senha: string;
    criadoEm: Date;
    atualizadoEm?: Date;
}