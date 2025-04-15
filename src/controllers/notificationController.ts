import { Request, Response } from 'express';
import { notificationService } from '../services/notificationService';

class NotificationController {
  async getAllNotifications(req: Request, res: Response) {
    const notifications = await notificationService.getAllNotifications();
    res.json(notifications);
  }

  async getNotificationById(req: Request, res: Response) {
    const notification = await notificationService.getNotificationById(req.params.id);
    if (notification) res.json(notification);
    else res.status(404).json({ message: 'Notification not found' });
  }

  async createNotification(req: Request, res: Response) {
    const notification = await notificationService.createNotification(req.body);
    res.status(201).json(notification);
  }

  async updateNotification(req: Request, res: Response) {
    const notification = await notificationService.updateNotification(req.params.id, req.body);
    if (notification) res.json(notification);
    else res.status(404).json({ message: 'Notification not found' });
  }

  async deleteNotification(req: Request, res: Response) {
    const success = await notificationService.deleteNotification(req.params.id);
    if (success) res.json({ message: 'Notification deleted' });
    else res.status(404).json({ message: 'Notification not found' });
  }
}

const notificationController = new NotificationController();
export default notificationController;
