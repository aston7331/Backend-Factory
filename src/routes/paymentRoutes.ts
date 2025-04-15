import { Router } from 'express';
import paymentController from '../controllers/paymentController';

const router = Router();

router.get('/', paymentController.getAllPayments.bind(paymentController));
router.get('/:id', paymentController.getPaymentById.bind(paymentController));
router.post('/', paymentController.createPayment.bind(paymentController));
router.put('/:id', paymentController.updatePayment.bind(paymentController));
router.delete('/:id', paymentController.deletePayment.bind(paymentController));

export default router;
