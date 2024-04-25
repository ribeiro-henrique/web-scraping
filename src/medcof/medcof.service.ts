import { Injectable } from "@nestjs/common";

@Injectable()
export class MedCofService {
    getPlano(): {} {
        return {
            nome: "Med Cof",
            produto: "Extensivo"
        };
    }
}