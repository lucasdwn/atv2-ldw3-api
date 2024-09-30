import { Router } from 'express';
import listaController from '../controllers/listaController';

const routes = Router();

routes.post('/', listaController.createLista);
routes.put('/update/:listaId', listaController.updateLista);
routes.delete('/delete/:listaId', listaController.deleteLista);
routes.get('/geta/:listaId', listaController.buscarLista);
routes.get('/getListsUser', listaController.buscarListasUser);
routes.get('/getListsSharedWithMe', listaController.buscarListasCompartilhadasComUser);

export default routes;
