/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export   class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  message: string;

}
