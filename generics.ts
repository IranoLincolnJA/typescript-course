// Generics são mais flexiveis, mas ao atribuir um valor ele não aceita mais valores diferentes
/* Generics letters
  S -> State
  T -> Type
  K -> Key
  V -> Value
  E -> Element
*/
function useState<S extends string | number = string >() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}
// Esse tipo S vai ser atribuido a primeira vez que for atribuido um valor ao S

const newState = useState();
// newState.setState(123)
// console.log(newState.getState())

newState.setState('123')
console.log(newState.getState())

/* Caso de utilização do Generic
  -> Muito utilizado por Hooks
*/
