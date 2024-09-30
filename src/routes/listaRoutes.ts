import { Router } from 'express';
import listaController from '../controllers/listaController';

const routes = Router();

routes.post('/', listaController.createLista);
routes.put('/update/:listaID', listaController.updateLista);
routes.get('/getListsUser', listaController.buscarListasUser);
routes.get('/getListsSharedWithMe', listaController.buscarListasCompartilhadasComUser);

export default routes;
