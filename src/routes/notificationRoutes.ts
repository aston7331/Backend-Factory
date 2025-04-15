import { Router } from 'express';
import notificationController from '../controllers/notificationController';

const router = Router();

router.get('/', notificationController.getAllNotifications.bind(notificationController));
router.get('/:id', notificationController.getNotificationById.bind(notificationController));
router.post('/', notificationController.createNotification.bind(notificationController));
router.put('/:id', notificationController.updateNotification.bind(notificationController));
router.delete('/:id', notificationController.deleteNotification.bind(notificationController));

export default router;
