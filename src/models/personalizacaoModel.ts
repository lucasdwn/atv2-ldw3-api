import mongoose, { Schema } from 'mongoose';
import { IPersonalizacaoModal } from '../interfaces/IPersonalizacao';

export const PersonalizacaoSchema = new Schema<IPersonalizacaoModal>({
    icone: { type: String, required: true },
    cor: { type: String, required: true },
    criadoEm: { type: Date, default: new Date() },
    atualizadoEm: { type: Date }
});

PersonalizacaoSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});


// export const PersonalizacaoModel = mongoose.model<IPersonalizacaoModal>('Personalizacao', PersonalizacaoSchema, 'Personalizacao');
