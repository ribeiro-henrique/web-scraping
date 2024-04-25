import { Module } from "@nestjs/common";
import { MedCofService } from "./medcof.service";
import { MedCofController } from "./medcof.controller";

@Module({
    imports: [],
    providers: [MedCofService],
    controllers: [MedCofController]
})
export class MedCofModule {}