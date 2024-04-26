import { Module } from '@nestjs/common';
import { MedGrupoService } from './medgrupo.service';
import { MedGrupoController } from './medgrupo.controller';

@Module({
  imports: [],
  providers: [MedGrupoService],
  controllers: [MedGrupoController],
})
export class MedGrupoModule {}
