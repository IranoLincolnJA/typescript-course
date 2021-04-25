/*  Decorators -> Ainda é uma feature experimental no typescript
  -> É uma declaração de algo que pode ser anexado a uma classe
  -> Trabalha em cima de partes anotadas para adicionarmos coisas novas
  ou fazer validações, como se fossem funções
*/

// Class Decorator -> Passado sobre uma classe
function Logger(prefix: string) {
  // Retornando o decorator
  return (constructor: any) => {
    console.log(`${prefix} -- ${constructor}`)
  }
}

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

@Logger('awsome')
@setAPIVersion('1.0.0')
class API {}

// Property Decorator -> Passado sobre uma propriedade
function minLengthTitle(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val

    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // Decorator para validar a quantidade minima de letras para o title
  @minLengthTitle(5)
  title: string

  constructor(t: string) {
    this.title = t
  }
}

const movie = new Movie('Interstellar')
console.log(movie)

// Method Decorator -> Passado sobre um método, e vai rodar todas as vezes que o método for utilizado
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(g: string) {
    this.greeting = g
  }

  @delay(2000)
  greet() {
    console.log(`Hello ${this.greeting}`)
  }
}

const cumprimento = new Greeter('Pessoinha')
cumprimento.greet()

// Parameter e Acessors decorators -> pouco utilizados
