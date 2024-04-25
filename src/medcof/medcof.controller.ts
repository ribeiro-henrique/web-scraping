import { Controller, Get } from "@nestjs/common";
import { MedCofService } from "./medcof.service";

@Controller('medcof')
export class MedCofController {
    constructor(private medCofService: MedCofService ) {}
    @Get()
    getData() {
        return this.medCofService.getPlano();
    }
}