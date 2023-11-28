import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import { User } from './users/users.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventDemoService } from './services/event-demo.service';
import { NotificationModule } from './notification/notification.module';
import { NotificationEntity } from './notification/notification.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'adminbd',
      entities: [User, NotificationEntity], //entités
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, NotificationEntity]),
    EventEmitterModule.forRoot(),
    NotificationModule,
  ],
  controllers: [UsersController],
  providers: [UserService, EventDemoService],
})
export class AppModule {}
