export default class Personagem {
    constructor(
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number
        ) {}

    public showStatus(): string {
        return `---------------\n
nome: ${this._nome}\n
energia: ${this.vida.toFixed()}\n
energia: ${this.energia.toFixed()}\n
vida: ${this.ataque.toFixed()}\n
vida: ${this.defesa.toFixed()}\n
---------------
        `
    }

    public treinarAtaque(): void {
        this.ataque += this.randomizar(7)
        this.energia -= this.randomizar(10)
    }

    public treinarDefesa(): void {
        this.defesa += this.randomizar(7)
        this.energia -= this.randomizar(10)
    }

    public descansar(tempo: number): void {
        this.energia += tempo * this.randomizar(10)
    }

    public batalhar(): number {
        let desgaste: number = this.randomizar(10)
        this.energia -= desgaste

        return desgaste
    }

    public isDead(): boolean {
        return (this.energia < 1 || this.vida < 1)
    }

    public get nome(): string {
        return this._nome
    }
    
    public set nome(nome : string) {
        this.nome = nome;
    }
    

    private randomizar(fator: number): number {
        return Math.random() * fator
    }
}