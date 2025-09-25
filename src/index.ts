// npx tsc  # Compilar para JS
// ctrl + . #
// f2
import  { Mamifero } from "./classes/Mamifero.js";
import  { Ave } from "./classes/Ave.js";
import  { Reptil } from "./classes/Reptil.js";
import  { Inventario } from "./managers/inventario.js";
import { Peixe } from "./classes/Peixe.js";
import { Animal } from "./classes/Animal.js";
import { MinhaAvedeRapina } from "./classes/AvedeRapina.js";

const inventario = new Inventario();
const leao = new Mamifero("Leão", 5);
const arara = new Ave("Arara Azul", 2);

const cobra = new Reptil("Cobra Coral", 4);
const goldfish = new Peixe("Peixe Dourado", 1);

inventario.adicionar(leao);
inventario.adicionar(arara);
const aguia = new MinhaAvedeRapina("Águia", 3);
inventario.adicionar(cobra);
inventario.adicionar(goldfish);
inventario.listar();
inventario.removerAnimal("Leão")
aguia.caçar()
//inventario.listar();
inventario.interagirTodos();