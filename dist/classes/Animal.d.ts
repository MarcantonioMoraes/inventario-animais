import type { IAnimal } from "../interfaces/iAnimal.js";
export declare abstract class Animal implements IAnimal {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number);
    abstract emitirSom(): void;
    abstract mover(): void;
}
//# sourceMappingURL=Animal.d.ts.map