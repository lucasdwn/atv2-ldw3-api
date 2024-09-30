import { Router } from 'express';
import tarefaController from '../controllers/tarefaController';

const routes = Router();

routes.post('/', tarefaController.createTarefa);

export default routes;
