import express from 'express';
import { createOrder, handleWebhook, trackOrder, verifyPayment } from '../controllers/order.controller.js';

const router = express.Router();

// POST: https://steveobizzstore.onrender.com/api/orders/create
router.post('/create', createOrder);

// GET: https://steveobizzstore.onrender.com/api/orders/verify/:reference
router.get('/verify/:reference', verifyPayment);

// POST: https://steveobizzstore.onrender.com/api/orders/webhook (Point Paystack)
router.post('/webhook', handleWebhook);

// GET: https://steveobizzstore.onrender.com/api/orders/track/:trackingId
router.get('/track/:trackingId', trackOrder);

export default router;
