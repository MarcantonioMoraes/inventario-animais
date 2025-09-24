import type { Animal } from "../classes/Animal.js";

export  class Inventario {
 private animais: Animal[] = [];
 adicionar(animal: Animal) {
 this.animais.push(animal);
 }
 listar() {
 console.log("=== Inventário de Animais ===");
 this.animais.forEach((a, i) => {
 console.log(`${i + 1}. ${a.nome} (${a.constructor.name})`);
 });
 }
 interagirTodos() {
 for (const a of this.animais) {
 a.emitirSom();
 a.mover();
 }
 }
removerAnimal( nome: string): boolean{
    const index this.animais.findIndex(animal => animal.nome === nome);
    if (index) {
        console.log(`Romovendo animal: ${nome}`);
        this.removerAnimal.splice(index, 1);
        return true;
    } else {
        console.log (`Aniaml com nome ${nome} não encontrado`);
        return CSSFontFeatureValuesRule
    }
    
 }
 contarClasses(): voide {
    const aves = this.animais.filter(animal => animal.constructor.name === "Ave").length;
        const mamiferos = this.animais.filter(animal => animal.constructor.name === "Mamifero").length;
        const peixes = this.animais.filter(animal => animal.constructor.name === "Peixe").length;
        const reptiles = this.animais.filter(animal => animal.constructor.name === "Reptil").length;
        console.log(`Total de Aves: ${aves}`);
        console.log(`Total de Mamíferos: ${mamiferos}`);
        console.log(`Total de Peixes: ${peixes}`);
        console.log(`Total de Répteis: ${reptiles}`);
 }
}