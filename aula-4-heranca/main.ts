import { Mage } from "./Mage";
import { Warrior } from "./Warrior";
import { Priest } from "./Priest";
import { Personagem } from "./Personagem";

const mage: Personagem = new Mage("fireball")
const warrior: Warrior = new Warrior("dumbest")
const priest: Priest = new Priest("RR you know who")

console.log(mage)
console.log(warrior)
console.log(priest)