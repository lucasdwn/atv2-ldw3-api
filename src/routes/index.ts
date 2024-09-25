import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes";
import authRoutes from "./authRoutes";

const routes = Router()

routes.use('/usuario', usuarioRoutes)
routes.use('/auth', authRoutes)
routes.get('/', (req, res) => {
    res.send('Hello World!');
});

export default routes