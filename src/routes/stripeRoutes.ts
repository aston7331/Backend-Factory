import { Router } from 'express';
import * as stripeController from '../controllers/stripeController';

const router = Router();

router.post('/payment-intent', stripeController.createPaymentIntent);
router.post('/plan', stripeController.createPlan);
router.post('/subscription', stripeController.createSubscription);
router.get('/payment-status/:paymentIntentId', stripeController.getPaymentStatus);
router.get('/subscription-status/:subscriptionId', stripeController.getSubscriptionStatus);
router.get('/plan/:planId', stripeController.getPlan);

export default router;
