import { Router } from "express";
import usuarioController from "../controllers/usuarioController";
import authMiddleware from "../middlewares/authMiddleware";
import { preserveBody } from "../middlewares/uploadMiddleware";

const routes = Router();
routes.post("/", usuarioController.createUsuario);
routes.put("/update", authMiddleware, preserveBody('image'), usuarioController.updateUsuario);
routes.delete("/delete", authMiddleware, usuarioController.deleteUsuario);
routes.get("/list", authMiddleware, usuarioController.listUsuarios);
routes.get("/currentUser", authMiddleware, usuarioController.getUsuarioAtual);
routes.get("/profile/:userId", authMiddleware, usuarioController.getUsuarioById);


export default routes