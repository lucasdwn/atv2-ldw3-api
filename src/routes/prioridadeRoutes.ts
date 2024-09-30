import { Router } from 'express';
import prioridadeController from '../controllers/prioridadeController';

const routes = Router();

routes.post('/', prioridadeController.cratePrioridade);
routes.get('/list', prioridadeController.listPrioridades);

export default routes;
