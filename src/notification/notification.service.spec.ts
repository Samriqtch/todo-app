import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  private notifications: string[] = [];

  createUserNotification(user) {
    const notification = `Un nouvel utilisateur a été créé. Nom d'utilisateur: ${user}`;
    this.notifications.push(notification);
    console.log(notification);
  }

  updateUserNotification(user) {
    const notification = `L'utilisateur ${user} a été mis à jour.`;
    this.notifications.push(notification);
    console.log(notification);
  }

  deleteUserNotification(user) {
    const notification = `L'utilisateur ${user} a été supprimé.`;
    this.notifications.push(notification);
    console.log(notification);
  }

  getNotifications() {
    return this.notifications;
  }
}
