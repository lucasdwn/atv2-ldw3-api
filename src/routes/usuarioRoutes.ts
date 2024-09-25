import { Router } from "express";
import usuarioController from "../controllers/usuarioController";

const routes = Router();

routes.post("/", usuarioController.createUsuario);
routes.get("/", usuarioController.listUsuarios);


export default routes