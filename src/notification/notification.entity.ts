/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export  default class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  message: string;

}
