import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedCofModule } from './medcof/medcof.module';
import { MedGrupoModule } from './medgrupo/medgrupo.module';

@Module({
  imports: [MedCofModule, MedGrupoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
