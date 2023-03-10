import { Mage } from "./Mage";
import { Priest } from "./Priest";
import { Personagem } from "./Personagem";

const mage: Personagem = new Mage("fireball")
const priest: Personagem = new Priest("RR you know who")

const personagens: Personagem[] = []

personagens.push(mage)
personagens.push(priest)

personagens.forEach(personagem => console.log(personagem.atacar()))