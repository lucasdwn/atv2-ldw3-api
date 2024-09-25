import { Router } from "express";
import usuarioController from "../controllers/usuarioController";

const routes = Router();

routes.post("/", usuarioController.createUsuario);
routes.get("/", usuarioController.listUsuarios);
routes.get("/:userId", usuarioController.getUsuarioById);


export default routes