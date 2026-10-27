import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service.js';

@Module({
  providers: [CpuService]
})
export class CpuModule {}
