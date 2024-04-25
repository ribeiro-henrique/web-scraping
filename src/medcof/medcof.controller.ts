/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { MedCofService } from './medcof.service';

@Controller('medcof')
export class MedCofController {
  constructor(private medCofService: MedCofService) {}
  @Get('/rmais')
  getRmais() {
    return this.medCofService.getRmais();
  }

  @Get('/rum')
  getRUm() {
    return this.medCofService.getRUm();
  }
}
