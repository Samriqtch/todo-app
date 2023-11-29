/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './users.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private eventEmitter: EventEmitter2
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({where:{id}});
  }

  async create(user: User):Promise<User>{
    const userName = user.firstName
    this.eventEmitter.emit('user.created', userName)
    return this.userRepository.save(user);
  }

  async update(id: number, updatedUser: User): Promise<User> {
    const userName = updatedUser.firstName
    this.eventEmitter.emit('user.updated',userName)
    await this.userRepository.update(id, updatedUser);
    return this.userRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
export { User };

