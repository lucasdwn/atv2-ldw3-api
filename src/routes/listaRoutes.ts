import { Router } from 'express';
import listaController from '../controllers/listaController';

const routes = Router();

routes.post('/', listaController.createLista);

export default routes;
