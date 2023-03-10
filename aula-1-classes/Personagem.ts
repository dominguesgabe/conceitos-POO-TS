import prompt from 'prompt-sync'

class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
        ) {}
}

let slowpoke: Personagem = new Personagem("zezé", 10, 20, 3, 9)

let teclado = prompt()
let option: number = 0

while(option !== 9) {
    console.log('======== Personagem ========')
    console.log('|1-Treinar ataque          |')
    console.log('|2-Treinar defesa          |')
    console.log('|3-Mostrar status          |')
    console.log('|9-Sair                    |')

    option = +teclado("Escolha uma ação: ")

    switch (option) {
        case 1:
            slowpoke.ataque++
            slowpoke.energia--
            break;
        case 2:
            slowpoke.defesa++
            slowpoke.energia--
            break;
        case 3:
            console.log(slowpoke)
            break;
    }
}
let yoda: Personagem = new Personagem("yoda master", 80, 70, 40, 90)

console.log(yoda)