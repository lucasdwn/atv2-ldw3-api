import { Schema, model } from 'mongoose';
import { IAnexoModal } from '../interfaces/IAnexo';


export const anexoSchema = new Schema<IAnexoModal>({
    usuarioId: { type: String, required: true },
    tarefaId: { type: String, required: false },
    originalFilename: { type: String, required: true },
    url: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
});

anexoSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default model<IAnexoModal>('Anexo', anexoSchema, 'Anexos');
