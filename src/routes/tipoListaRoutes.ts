import { Router } from 'express';
import tipoListaController from '../controllers/tipoListaController';

const routes = Router();

routes.post('/', tipoListaController.createLista);
routes.get('/list', tipoListaController.listTipoListas);
routes.get('/listAll', tipoListaController.listAllTiposLista);
routes.get('/findOne/:tipoListaId', tipoListaController.findOneTipoLista);
routes.put('/update/:tipoListaId', tipoListaController.updateTipoLista);
routes.delete('/delete/:tipoListaId', tipoListaController.deleteTipoLista);

export default routes;
