// Primitive Types

// Boolean ( true / false )
let isOpen: boolean
isOpen = true

// String ( 'foo', "foo", `foo` )
let message: string
message = `foo ${isOpen}`

// Number ( Serve para todo tipo de numero, int, float, hexadecimal, binário )
let total: number
total = 10.2

// Array ( O array funciona um pouco diferente, pois temos que especificar do que se trata ele)
let items: number[]
items = [ 1, 2, 3, 4, 5 ]

// Ou
let items2: Array<number>
items = [ 1, 2, 3, 4, 5 ]

// Tuplas ( Nas Tuplas ja devemos saber o numero de elementos dentro do array assim como seu tipo )
let title: [number, string, string, boolean]
title = [1, "bar", "foo", false]

// Enum ( Enumerator para criar um conjunto de chaves e valores )
enum Colors {
  white = "#fff",
  black = "#000"
}

// Any ( Qualquer coisa ) NÃO USAR NUNCA, A NÃO SER EXTREMA NECESSIDADE
let thing: any
thing = "qualquer coisa"

// Void ( Sem retorno )
function logger(): void {
  console.log()
}

// Null / Undefined
let bla: string | undefined
bla

// Never ( Nunca retornará nada )
function error(): never {
  throw new Error("error")
}

// Object ( Qualquer coisa que não seja um tipo primitivo )
let cart: object
cart = {
  key: "foo"
}





// Types Inference ( São types inferidos direto pelo typescript )
let messageDefined = "Mensagem pré definida"
messageDefined = "Colocando outra string"

// Mesmo caso para a função abaixo, o typescript ja entende que 'e' é um type MouseEvent
window.addEventListener("click", (e) => {
  console.log(e.target)
})





// Type Aliases e Union

// Union ( Quando meu typo pode receber mais de um tipo )
function logDetail (uid: number | string, item: string) {
  console.log(`A product with id ${uid} and name ${item}`)
}
logDetail('123', 'Shoes')
logDetail(123, 'Shoes')

// Type Aliases ( Quando temos por exemplo duas funções que usam os mesmo types, utilizamos um Alias )
type Uid = number | string

function logUser (uid: Uid, user: string) {
  console.log(`An user with id ${uid} and name ${user}`)
}
logDetail('123', 'Lincoln')
logDetail(123, 'Lincoln')

// Ou podemos criar um Alias ja dizendo o que ele pode ser
type Platform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlatform(platform : Platform) {
  return platform
}
renderPlatform('Linux')





// Type Aliases com Intersection
type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account : AccountInfo = {
  id: 123,
  name: 'Lincoln',
  // email: 'lincoln@lincoln.com.br' por conta da interrogação o email se torna opcional
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'Roquis',
  level: 30
}

// Type Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Lincoln',
  email: 'lincoln@lincoln.com.br',
  nickname: 'Roquis',
  level: 30
}

/* Vantagens de se usar Types
  -> Mais simples de usar
  -> Para extender classes usa apenas um simbolo ( & )
  -> Mais simples de agregar propriedades, fazer uniões
  -> Facilidade a trabalhar com tipos primitidos
  -> Recomendado utilizar na maioria das vezes
  -> Types -> Props
*/





// Type Utilities
type Todo = {
  title: string
  description: string
  completed: boolean
}

// Para que não faça mutações para tribuir novos valores, utilizar os Utilities
// Readonly
const todo: Readonly<Todo> = {
  title: 'Assistir The Blacklist novamente',
  description: 'Relembrar os detalhes para a nova temporada',
  completed: false
}
console.log(todo)
// todo.completed = true

// Para fazer a mudança do objeto fazer isso com um função
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todoUpdated: Todo = updateTodo(todo, { completed: true })

// Pick -> usado para pegar apenas algumas coisas do type
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todoPick: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

// Omit -> Omit o que queremos passar
type todoOmit = Omit<Todo, 'description'>
