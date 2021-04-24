/* Classes
  -> Classes não são obrigatórias mas seu uso ajuda bastante e são muito funcionais
  -> Classes abstratas não permitem que sejam criados instancias a partir delas, mas podem ser herdadas
  essas classes abstratas servem para ser um modelo, mas não deixa instanciar diretamente.
  -> Para criar uma classe basta apenas colocar a palavra class e dar um nome com a primeira letra Maiuscula,
  em caso de varios nomes usar Case Sensitive
  -> Cria propriedades com os metodos modifiers, caso nada seja colocado por inferencia é colocado como Public
  -> Possivel criar construtores e
  -> Pode-se criar os metodos Getters e Setters para pegar e modificar valores
*/

/* Métodos Modifiers
  -> Private: Método que não permite o acesso externo ao recurso da classe (método utilizado para não permitir
    que a variável seja alterada ou lida fora da classe, nem por uma classe 'Filho')
  -> Protected: Método que permite chamar dentro da classe ou da classe 'Filho', mas não consegue fora da classe
  -> Public: Método implicito, é quando o método já é publico, permite ler, alterar fora da classe
  -> Readonly: Permite que o método seja chamado e lido fora da classe, porém não permite alterações
*/

/* Métodos Acccessors
  -> Get: Pega valores e propriedades dentro da classe
  -> Set: Seta um valor
*/

abstract class UserAccount {
  readonly name: string
  protected age: number

  // Para criar um objeto, precisamos de um método construtor
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // Também é possivel criar métodos dentro das classes
  logDetails(): void {
    console.log(`The user ${this.name} is ${this.age} years old`)
  }
}

// const user = new UserAccount('Lincoln', 28);
// user.logDetails()

// Também é possivel criar uma classe que recebe de herança outra classe
class CharAccount extends UserAccount {
  private nickname: string
  public level: number
  public jogo: string
  public elo: string

  constructor(name: string, age: number, nickname: string, level: number, jogo: string, elo: string) {
    // Método super de uma classe, pega as propriedades da classe 'Pai'
    super(name, age)

    this.nickname = nickname
    this.level = level
    this.jogo = jogo
    this.elo = elo
  }

  get getLevel() {
    return this.level
  }

  set setElo(elo: string) {
    this.elo = elo
  }

  logCharDetail(): void {
    console.log(
      `The player ${this.name} is ${this.age} as has the char ${this.nickname} at level ${this.level} and plays ${this.jogo}`
    )
  }
}

const roquis = new CharAccount(
  'Lincoln', 28, 'Roquis', 30, 'Lega das Lendas', 'Pratina'
)
roquis.logDetails()
console.log(roquis.getLevel)
roquis.setElo = 'Bronze'
