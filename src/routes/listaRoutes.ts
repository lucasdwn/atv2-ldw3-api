import { Router } from 'express';
import listaController from '../controllers/listaController';

const routes = Router();

routes.post('/', listaController.createLista);
routes.get('/getListsUser', listaController.buscarListasUser);
routes.get('/getListsSharedWithMe', listaController.buscarListasCompartilhadasComUser);

export default routes;
