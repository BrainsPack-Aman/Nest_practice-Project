import { Controller, Get } from '@nestjs/common';
import { DiskService } from '../disk/disk.service.js';
import { CpuService } from '../cpu/cpu.service.js';

@Controller('computer')
export class ComputerController {
    constructor(private diskService : DiskService , private cpuService : CpuService){}


    @Get()
    run(){
        return[
            [this.cpuService.compute(1,2) , this.diskService.getData()],
           
        ]
    }
}
