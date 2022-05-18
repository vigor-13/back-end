import { Module } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Module({
  providers: [DummyService],
  exports: [DummyService],
})
export class DummyModule {}
