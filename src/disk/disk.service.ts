import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class DiskService {

    constructor(private  powerService  : PowerService){}

    getData(){
        console.log(`disk service is using 20 watss of power of the powerService`)
        this.powerService.supplyPower(20);
        return "data";
    }
}
