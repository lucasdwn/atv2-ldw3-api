import { Router } from 'express';
import authController from '../controllers/authController';

const routes = Router();

routes.post('/login', authController.login);
routes.post('/refresh-token', authController.refresh);

export default routes;
