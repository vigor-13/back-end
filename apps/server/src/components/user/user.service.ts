import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AbstractUserService } from 'libs/auth';
import { Prisma, User as PrismaUser } from '@prisma/client';
import { DbPrismaService } from 'libs/db-prisma';
import { AppLogger } from '@app/logger';

// This should be a real class/interface representing a user entity
export type User = PrismaUser;

@Injectable()
export class UserService implements AbstractUserService {
  private readonly logger = new AppLogger(UserService.name);
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

  constructor(private prismaService: DbPrismaService) {}

  async findOne(key: string): Promise<any | undefined> {
    return this.users.find((user) => user.email === key);
  }

  async findUser(props: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({ where: props });
  }

  async createUser(props: Prisma.UserCreateInput): Promise<User> {
    const isExists = await this.findUser({ email: props.email });
    if (isExists) throw new Error('This email is already registered.');

    return this.prismaService.user.create({ data: props });
  }
}
