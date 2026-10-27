import { Module } from '@nestjs/common';
import { DiskService } from './disk.service.js';

@Module({
  providers: [DiskService]
})
export class DiskModule {}
