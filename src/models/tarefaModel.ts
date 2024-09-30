import mongoose, { Schema } from "mongoose";
import { StatusEnum } from "../enums/tarefasEnum";
import { ISubTarefaModal, ITarefaModal } from "../interfaces/ITarefa";
import { anexoSchema } from "./anexoModel";

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
    listaId: { type: String, required: [true, "o campo 'Lista' é obrigatório"] },
    titulo: { type: String, required: [true, "o campo 'Titulo' é obrigatório"] },
    descricao: { type: String, required: false },
    ordenacao: { type: Number, required: false },
    prioridadeId: { type: String, required: [true, "o campo 'Prioridade' é obrigatório"] },
    status: { type: String, enum: Object.values(StatusEnum), required: true },
    subTarefas: [SubTarefaSchema],
    anexos: [anexoSchema],
    dataDeVencimento: { type: Date, required: [true, "o campo 'Data de vencimento' é obrigatório"] },
    realizadoEm: { type: Date },
    criadoEm: { type: Date, default: Date.now }
});

TarefaSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Tarefa = mongoose.model<ITarefaModal>('Tarefa', TarefaSchema, 'Tarefas');

export default Tarefa;