import express from 'express';
import {
	getOrders,
	addOrder,
	changeOrderStatus,
} from '../controllers/orders.controller.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', addOrder);
router.patch('/:id', changeOrderStatus);

export default router;