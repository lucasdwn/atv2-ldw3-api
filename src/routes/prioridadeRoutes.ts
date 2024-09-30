import { Router } from 'express';
import prioridadeController from '../controllers/prioridadeController';

const routes = Router();

routes.post('/', prioridadeController.createPrioridade);
routes.get('/list', prioridadeController.listPrioridades);
routes.put('/update/:prioridadeId', prioridadeController.updatePrioridade);
routes.delete('/delete/:prioridadeId', prioridadeController.deletePrioridade);

export default routes;
