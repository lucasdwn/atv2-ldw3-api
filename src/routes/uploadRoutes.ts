import express from 'express';
import { preserveBody } from '../middlewares/uploadMiddleware';
import anexoController from '../controllers/anexoController';

const router = express.Router();

router.post('/image', preserveBody('image'), anexoController.uploadImagem);
router.post('/documents', preserveBody('documents'), anexoController.uploadDocumentos);

export default router;