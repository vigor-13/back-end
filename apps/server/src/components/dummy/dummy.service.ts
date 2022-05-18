import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class DummyService {
  getMessage() {
    return 'DUMMTY';
  }
}
