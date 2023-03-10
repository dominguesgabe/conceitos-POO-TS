export default class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
        ) {}

    showStatus(): string {
        return `---------------\n
nome: ${this.nome}\n
energia: ${this.vida.toFixed()}\n
energia: ${this.energia.toFixed()}\n
vida: ${this.ataque.toFixed()}\n
vida: ${this.defesa.toFixed()}\n
---------------
        `
    }

    treinarAtaque(): void {
        this.ataque += Math.random() * 7
        this.energia -= Math.random() * 10
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 7
        this.energia -= Math.random() * 10
    }

    descansar(tempo: number): void {
        this.energia += tempo * Math.random() * 10
    }

    batalhar(): number {
        let desgaste: number = Math.random() * 10
        this.energia -= desgaste

        return desgaste
    }

    isDead(): boolean {
        return (this.energia < 1 || this.vida < 1)
    }
}