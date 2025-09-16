// Ave.ts
import type { Animal } from "../classes/Animal.js";

export class Ave extends Animal {
 emitirSom(): void {
 console.log(`${this.nome} canta: "piu piu"`);
 }
 mover(): void {
 console.log(`${this.nome} está voando.`);
 }
}
