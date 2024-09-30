import mongoose, { Schema } from 'mongoose';
import { IListaModal } from '../interfaces/ILista';
import { PersonalizacaoSchema } from './personalizacaoModel';
import { TarefaSchema } from './tarefaModel';
import { UsuarioPermitidoSchema } from './usuarioModel';



const ListaSchema = new Schema<IListaModal>({
    usuarioId: { type: String, required: [true, "o campo 'Usuario' é obrigatório"] },
    nome: { type: String, required: [true, "o campo 'Nome' é obrigatório"] },
    tarefas: [TarefaSchema],
    usuariosPermitidos: [UsuarioPermitidoSchema],
    criadoEm: { type: Date, default: Date.now },
    personalizacao: PersonalizacaoSchema,
});

ListaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});



export const ListaModel = mongoose.model<IListaModal>('Lista', ListaSchema, 'Listas');
