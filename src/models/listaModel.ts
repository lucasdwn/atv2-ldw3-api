import mongoose, { model, Schema } from 'mongoose';
import { IListaModal } from '../interfaces/ILista';
import { PersonalizacaoSchema } from './personalizacaoModel';
import { UsuarioPermitidoSchema } from './usuarioModel';



const ListaSchema = new Schema<IListaModal>({
    usuarioId: { type: String, required: [true, "o campo 'Usuario' é obrigatório"] },
    nome: { type: String, required: [true, "o campo 'Nome' é obrigatório"] },
    tipoListaId: { type: String, required: [true, "o campo 'Tipo de lista' é obrigatório"] },
    usuariosPermitidos: [UsuarioPermitidoSchema],
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date },
    personalizacao: PersonalizacaoSchema,
});

ListaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default model<IListaModal>('Lista', ListaSchema, 'Listas');