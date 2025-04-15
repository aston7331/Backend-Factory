import { Router } from 'express';
import { checkAllDbHealth } from '../utils/dbHealth';
import userRoutes from './userRoutes';
import notificationRoutes from './notificationRoutes';
import paymentRoutes from './paymentRoutes';

const router = Router();

// Health check route for all databases
router.get('/db-health', async (req, res) => {
  const health = await checkAllDbHealth();
  res.json(health);
});

router.use('/users', userRoutes);
router.use('/notifications', notificationRoutes);
router.use('/payments', paymentRoutes);

export default router;
