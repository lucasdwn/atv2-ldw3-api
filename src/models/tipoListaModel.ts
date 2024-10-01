import { Schema, model } from 'mongoose';
import { PersonalizacaoSchema } from './personalizacaoModel';
import { ITipoListaModal } from '../interfaces/ITipoLista';


export const tipoListaSchema = new Schema<ITipoListaModal>({
    usuarioId: { type: String, required: true },
    nome: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date },
    personalizacao: PersonalizacaoSchema,
});

tipoListaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default model<ITipoListaModal>('TipoLista', tipoListaSchema, 'TiposLista');
