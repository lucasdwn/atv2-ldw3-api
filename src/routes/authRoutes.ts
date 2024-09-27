import { Router } from 'express';
import authController from '../controllers/authController';
import authMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.post('/login', authController.login);
routes.get("/validate-token", authMiddleware, (req, res) => {
    res.sendStatus(200);
});
routes.post('/refresh-token', authController.refresh);

export default routes;
