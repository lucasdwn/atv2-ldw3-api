import express from 'express';
import { preserveBody } from '../middlewares/uploadMiddleware';
import anexoController from '../controllers/anexoController';

const router = express.Router();

router.post('/image', preserveBody('image'), anexoController.uploadImagem);
router.post('/document', preserveBody('document'), anexoController.uploadDocumento);

export default router;