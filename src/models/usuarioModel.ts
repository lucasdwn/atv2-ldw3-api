import mongoose, { Schema } from 'mongoose';
import { IUsuarioModal, IUsuarioPermitidoModal } from '../interfaces/IUsuario';


const usuarioSchema = new Schema<IUsuarioModal>({
    nome: { type: String, required: [true, "o campo 'nome' é obrigatório"] },
    profileImage: { type: String, required: false },
    email: {
        type: String,
        required: [true, "O campo 'e-mail' é obrigatório"],
        unique: true,
        validate: {
            validator: function (value: string) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é um formato de e-mail válido`,
        }
    },
    senha: { type: String, select: false, required: [true, "O campo 'senha' é obrigatório"] },
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date }
});

usuarioSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const UsuarioPermitidoSchema = new Schema<IUsuarioPermitidoModal>({
    usuarioId: { type: String, required: true },
    email: { type: String, required: true },
    podeEditar: { type: Boolean, required: true },
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date },
});

UsuarioPermitidoSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});


const Usuario = mongoose.model<IUsuarioModal>('Usuario', usuarioSchema, 'Usuarios');

export default Usuario;
