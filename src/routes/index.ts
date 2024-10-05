import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes";
import authRoutes from "./authRoutes";
import uploadRoutes from "./uploadRoutes";
import authMiddleware from "../middlewares/authMiddleware";
import prioridadeRoutes from "./prioridadeRoutes";
import listaRoutes from "./listaRoutes";
import tarefaRoutes from "./tarefaRoutes";
import tipoListaRoutes from "./tipoListaRoutes";
import express from 'express';
import path from 'path';

const routes = Router()

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
routes.use('/tipoLista', authMiddleware, tipoListaRoutes)
routes.use('/tarefa', authMiddleware, tarefaRoutes)
routes.use('/lista', authMiddleware, listaRoutes)
routes.use('/prioridade', authMiddleware, prioridadeRoutes)
routes.use('/upload', authMiddleware, uploadRoutes)
routes.use('/usuario', usuarioRoutes)
routes.use('/auth', authRoutes)
routes.get('/', (req, res) => {
    res.send('Hello World!');
});

export default routes