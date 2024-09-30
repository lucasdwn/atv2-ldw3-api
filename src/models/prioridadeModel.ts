import { Schema, model } from 'mongoose';
import { IPrioridadeModal } from '../interfaces/IPrioridade';
import { PersonalizacaoSchema } from './personalizacaoModel';


export const prioridadeSchema = new Schema<IPrioridadeModal>({
    usuarioId: { type: String, required: true },
    nome: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date },
    personalizacao: PersonalizacaoSchema,
});

prioridadeSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default model<IPrioridadeModal>('Prioridade', prioridadeSchema, 'Prioridades');
