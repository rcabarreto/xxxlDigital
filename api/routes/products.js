import express from 'express';
import productsController from '../controllers/productsController';

const router = express.Router();

router.get('/', productsController.getProducts);

export default router;
