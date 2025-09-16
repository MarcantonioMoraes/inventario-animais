import type { IAnimal } from "../interfaces/iAnimal.js";

export abstract class Animal implements IAnimal {
 constructor(public nome: string, public idade: number) {}
 abstract emitirSom(): void;
 abstract mover(): void;
}
