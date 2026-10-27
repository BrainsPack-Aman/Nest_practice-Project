import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller.js';

@Module({
  controllers: [ComputerController]
})
export class ComputerModule {}
