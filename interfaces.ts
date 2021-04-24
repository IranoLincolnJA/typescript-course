// Interfaces é um conjunto de dados para descrever a estrutura de um objeto, são exclusivas para objetos

// Também é possivel adicionar modifiers para interfaces
interface GameProps {
  title: string
  description?: string
  readonly genre: string
  plataform?: string[]
  getSimilars?: (title: string) => void
}

interface DLC extends GameProps {
  originalGame: GameProps
  newContent: string[]
}

const tlou: GameProps = {
  title: 'The Last Of Us',
  description: 'The best game of PS3 and Remaster to PS4',
  genre: 'Action',
  plataform: ['Playstation 3', 'Playstation 4', 'Playstation 5'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

const leftBehind: DLC = {
  title: 'The Last Of Us: Left Behind',
  description: 'Yu play as Ellie the original game',
  genre: 'Action',
  plataform: [''],
  originalGame: tlou,

  newContent: ['3 more hours of game', 'new parts pf history']
}

// Quando o método for opcional, usar um safe guard para garantir que aquele metodo existe para chamá-lo
if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

// Implementando uma classe com base em uma interface
class CreateGame implements GameProps {
  title: string
  description: string
  genre: string

  constructor(t: string, d: string, g: string) {
    this.title = t
    this.description = d
    this.genre = g
  }
}