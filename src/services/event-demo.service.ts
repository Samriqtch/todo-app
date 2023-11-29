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
        @InjectRepository(NotificationEntity)
        private readonly notificationRepository: Repository<NotificationEntity>,
        
      ) {}
/*  constructor(private eventEmitter: EventEmitter2) {}

  emitEvent() {
    this.eventEmitter.emit(
      'order.created',
      new OrderCreatedEvent({ orderId: 1, payload: {message:'user created'} }),
)}*/
@OnEvent('user.created')
notify(userName: string){
    const notification = new NotificationEntity()
    const mess = `user ${userName} creer` 
    notification.message=mess
    console.log('notifying subscribers..', userName)
    return  this.notificationRepository.save(notification)
}
@OnEvent('user.updated')
notifyupdate(userName:string){
  const notification = new NotificationEntity()
  const mess = `user ${userName} mise à jour`
  notification.message=mess
  console.log('user updating..',userName)
  return this.notificationRepository.save(notification)

}
@OnEvent('user.remove')
notifyremove(userName:string){
  const notification = new NotificationEntity()
  const mess = `user ${userName} supprimer`
  notification.message=mess
  console.log('user removing ..',userName)
  return this.notificationRepository.save(notification)

}
} 
