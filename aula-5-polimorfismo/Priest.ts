import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Priest extends Personagem {
    private _influencia: number
    private _heresia: number

    constructor(nome: string) {
        super(nome)
        this._influencia = Util.randomizar(100)
        this._heresia = Util.randomizar(600)
        this._armadura = Util.randomizar(100)
        this._vidaMaxima = Util.randomizar(3300)
        this._vidaAtual = Util.randomizar(this._vidaMaxima)
    }

    public atacar(): string {
        return "ataque pádrico"
    }

    defender(atacante: Personagem): number {
        return 0;
    }
}