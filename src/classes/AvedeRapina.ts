import { Ave } from "./Ave.js";

export abstract class AvedeRapina extends Ave {
 abstract caçar(): void
}

export class MinhaAvedeRapina extends AvedeRapina{
    caçar(): void {
        console.log(`O ${this.nome} está caçando!`)
    }
}