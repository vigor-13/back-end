import { Injectable } from '@nestjs/common';
import { AbstractUserService } from 'libs/auth';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService implements AbstractUserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'kkw@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: '112@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(key: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === key);
  }
}
