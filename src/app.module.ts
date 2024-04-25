import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedCofModule } from './medcof/medcof.module';

@Module({
  imports: [MedCofModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
