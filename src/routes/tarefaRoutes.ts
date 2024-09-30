import { Router } from 'express';
import tarefaController from '../controllers/tarefaController';

const routes = Router();

routes.post('/', tarefaController.createTarefa);
routes.get('/getTarefas', tarefaController.buscarTarefas);

export default routes;
