import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Mage extends Personagem {
    private _intelecto: number
    private _velocidade: number

    constructor(nome: string) {
        super(nome)
        this._intelecto = Util.randomizar(100)
        this._velocidade = Util.randomizar(1200)
        this._armadura = Util.randomizar(600)
        this._vidaMaxima = Util.randomizar(300)
        this._vidaAtual = Util.randomizar(this._vidaMaxima)
    }

    public atacar(): string {
        return "ataque mágico"
    }
}