import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class CpuService {
      
    constructor(public powerService : PowerService){}
     
    compute(a : number , b : number){
        console.log(`We are drawwing 10 watss of power from PowerServie`);
        this.powerService.supplyPower(10);
        return a+b;
    }
}
