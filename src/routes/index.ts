import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes";
import authRoutes from "./authRoutes";
import uploadRoutes from "./uploadRoutes";
import authMiddleware from "../middlewares/authMiddleware";
import prioridadeRoutes from "./prioridadeRoutes";

const routes = Router()

routes.use('/prioridade', authMiddleware, prioridadeRoutes)
routes.use('/upload', authMiddleware, uploadRoutes)
routes.use('/usuario', usuarioRoutes)
routes.use('/auth', authRoutes)
routes.get('/', (req, res) => {
    res.send('Hello World!');
});

export default routes