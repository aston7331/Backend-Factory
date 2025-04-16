import { Router } from 'express';
import { checkAllDbHealth } from '../utils/dbHealth';
import userRoutes from './userRoutes';
import notificationRoutes from './notificationRoutes';
import stripeRoutes from './stripeRoutes';
import uploadRoutes from './upload';

const router = Router();

// Health check route for all databases
router.get('/health', async (req, res) => {
  const health = await checkAllDbHealth();
  res.json(health);
});

router.use('/users', userRoutes);
router.use('/notifications', notificationRoutes);
router.use('/stripe', stripeRoutes);
router.use('/upload', uploadRoutes);

export default router;