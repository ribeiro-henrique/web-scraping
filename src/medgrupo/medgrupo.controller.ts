/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { MedGrupoService } from "./medgrupo.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Med Grupo')
@Controller('medgrupo')
export class MedGrupoController {
    constructor(private medGrupoService: MedGrupoService) {}
    @Get('/rmais')
    getRmais() {
        return this.medGrupoService.getRmais();
    }
}