import mongoose, { Schema, Document } from 'mongoose';

export interface IUsuario extends Document {
    nome: string;
    email: string;
    senha: string;
    criadoEm: Date;
    atualizadoEm?: Date;
}

const usuarioSchema: Schema = new Schema({
    nome: { type: String, required: [true, "o campo 'nome' é obrigatório"] },
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

const Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema, 'Usuarios');

export default Usuario;
