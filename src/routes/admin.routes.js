// routes/admin.routes.js
import express from 'express';
import {
  adminLogin,
  getAllOrders,
  updateOrderStatus,
  debugOrders,
} from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/debug',  debugOrders);
router.get('/orders', getAllOrders);
router.post('/update-status', updateOrderStatus);

export default router;