import { Router } from 'express';
import tarefaController from '../controllers/tarefaController';

const routes = Router();

routes.post('/', tarefaController.createTarefa);
routes.get('/getTarefas', tarefaController.buscarTarefas);
routes.get('/getTarefa/:tarefaId', tarefaController.buscarTarefa);
routes.put('/update/:tarefaId', tarefaController.updateTarefa);
routes.put('/updateOrdenacao/', tarefaController.atualizarOrdenacao);
routes.put('/updateRealizadoEm/', tarefaController.atualizarRealizadoEm);
routes.delete('/delete/:tarefaId', tarefaController.deleteTarefa);

export default routes;
