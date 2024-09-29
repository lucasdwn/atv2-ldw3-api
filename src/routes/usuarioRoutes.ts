import { Router } from "express";
import usuarioController from "../controllers/usuarioController";
import authMiddleware from "../middlewares/authMiddleware";
import { uploadWithUserIdPreservedImage } from "../middlewares/uploadMiddleware";

const routes = Router();
routes.post("/", usuarioController.createUsuario);
routes.put("/update", authMiddleware, uploadWithUserIdPreservedImage, usuarioController.updateUsuario);
routes.delete("/delete", authMiddleware, usuarioController.deleteUsuario);
routes.get("/list", authMiddleware, usuarioController.listUsuarios);
routes.get("/currentUser", authMiddleware, usuarioController.getUsuarioAtual);
routes.get("/profile/:userId", authMiddleware, usuarioController.getUsuarioById);


export default routes