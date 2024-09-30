import { Router } from 'express';
import tarefaController from '../controllers/tarefaController';

const routes = Router();

routes.post('/', tarefaController.createTarefa);
routes.get('/getTarefas', tarefaController.buscarTarefas);
routes.get('/getTarefa/:tarefaId', tarefaController.buscarTarefa);
routes.put('/update/:tarefaId', tarefaController.updateTarefa);

export default routes;
