import prompt from 'prompt-sync'
import Personagem  from './Personagem'

let person: Personagem = new Personagem("Slowpoke", 10, 20, 3, 9)

let teclado = prompt()
let option: number = 0

while(option !== 9 || person.isDead()) {
    console.log(`======== Personagem ${person.nome}====`)
    console.log('|1-Treinar ataque          |')
    console.log('|2-Treinar defesa          |')
    console.log('|3-Descansar               |')
    console.log('|4-Batalhar                |')
    console.log('|8-Mostrar status          |')
    console.log('|9-Sair                    |')

    option = +teclado("Escolha uma ação: ")

    switch (option) {
        case 1:
            person.treinarAtaque()
            console.log(person.showStatus())
            break;
        case 2:
            person.treinarDefesa()
            person.showStatus()
            break;
        case 3:
            let horas: number = Number(teclado("Digite o tempo do descanso: "))
            person.descansar(horas)
            person.showStatus()
            break;
        case 4:
            let desgaste: number = person.batalhar()

            console.log(`seu personagem perdeu ${desgaste} de vida`)
            person.showStatus()
            break;
    }
}