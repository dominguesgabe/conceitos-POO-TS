import { Util } from "./Util"

export class Personagem {
    protected _nome: string
    protected _armadura: number
    protected _vidaMaxima: number
    protected _vidaAtual: number

    constructor(nome: string) {
        this._nome = nome
        this._armadura = Util.randomizar(100)
        this._vidaMaxima = Util.randomizar(100)
        this._vidaAtual = Util.randomizar(this._vidaMaxima)
    }
}