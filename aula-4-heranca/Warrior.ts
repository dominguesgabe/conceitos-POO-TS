import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Warrior extends Personagem {
    private _forca: number
    private _agilidade: number

    constructor(nome: string) {
        super(nome)
        this._forca = Util.randomizar(100)
        this._agilidade = Util.randomizar(100)
        this._armadura = Util.randomizar(600)
        this._vidaAtual = Util.randomizar(this._vidaMaxima)
    }
}