/* eslint-disable prettier/prettier */
/* eslint-disable-next-line prettier/prettier*/
// eslint-disable-next-line prettier/prettier
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  static firstName: any;
}
