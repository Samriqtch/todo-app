/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from 'src/notification/notification.entity';
import { Repository } from 'typeorm';

//import { OrderCreatedEvent } from "../events/order-created.event";

@Injectable()
export class EventDemoService {
    constructor(
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
        
      ) {}
/*  constructor(private eventEmitter: EventEmitter2) {}

  emitEvent() {
    this.eventEmitter.emit(
      'order.created',
      new OrderCreatedEvent({ orderId: 1, payload: {message:'user created'} }),
)}*/
@OnEvent('user.created')
notify(userName: string){
    const notif = new Notification()
    const mess = `user ${userName} creer` 
    notif.message=mess
    console.log('notifying subscribers..', userName)
    return  this.notificationRepository.save(notif)

}
} 
