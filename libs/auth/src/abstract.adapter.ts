export type User = any;

export abstract class AbstractUserService {
  abstract findOne(username: string): Promise<User | undefined>;
}
