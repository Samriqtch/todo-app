import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Get()
  getAllNotification() {
    return this.notificationService.findAll();
  }
}
