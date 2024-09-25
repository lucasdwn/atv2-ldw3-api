import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes"

const routes = Router()

routes.use('/usuario', usuarioRoutes)
routes.get('/', (req, res) => {
    res.send('Hello World!');
});

export default routes