import { v4 as uuidv4 } from 'uuid';

type Notification = {
  id: string;
  message: string;
  read: boolean;
};

const notifications: Notification[] = [];

 class NotificationService {
  async getAllNotifications(): Promise<Notification[]> {
    return notifications;
  }

  async getNotificationById(id: string): Promise<Notification | undefined> {
    return notifications.find(n => n.id === id);
  }

  async createNotification(data: Omit<Notification, 'id'>): Promise<Notification> {
    const notification = { id: uuidv4(), ...data };
    notifications.push(notification);
    return notification;
  }

  async updateNotification(id: string, data: Partial<Omit<Notification, 'id'>>): Promise<Notification | undefined> {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
      Object.assign(notification, data);
      return notification;
    }
    return undefined;
  }

  async deleteNotification(id: string): Promise<boolean> {
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const notificationService = new NotificationService();
