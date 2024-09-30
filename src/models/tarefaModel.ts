import { Schema } from "mongoose";
import { StatusEnum } from "../enums/tarefasEnum";
import { ISubTarefaModal, ITarefaModal } from "../interfaces/ITarefa";
import { anexoSchema } from "./anexoModel";
import { PersonalizacaoSchema } from "./personalizacaoModel";
import { prioridadeSchema } from "./prioridadeModel";

const SubTarefaSchema = new Schema<ISubTarefaModal>({
    titulo: { type: String, required: [true, "o campo 'Titulo' é obrigatório"] },
    descricao: { type: String },
    ordenacao: { type: Number, required: false },
    criadoEm: { type: Date, default: Date.now },
    isFinalizada: { type: Boolean, default: false },
});

SubTarefaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});


export const TarefaSchema = new Schema<ITarefaModal>({
    titulo: { type: String, required: [true, "o campo 'Titulo' é obrigatório"] },
    descricao: { type: String, required: false },
    ordenacao: { type: Number, required: false },
    prioridade: { type: prioridadeSchema, required: [true, "o campo 'Prioridade' é obrigatório"] },
    status: { type: String, enum: Object.values(StatusEnum), required: true },
    subTarefas: [SubTarefaSchema],
    anexos: [anexoSchema],
    dataDeVencimento: { type: Date, required: [true, "o campo 'Data de vencimento' é obrigatório"] },
    realizadoEm: { type: Date },
    criadoEm: { type: Date, default: Date.now },
    personalizacao: PersonalizacaoSchema,
});

TarefaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});
