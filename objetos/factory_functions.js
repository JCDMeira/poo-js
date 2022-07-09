/*
  _ factory functions

  - funções que retornam objetos
  - lembra constructor functions, mas não usa new
  - objeto é criado no retorno da função

  # reutiliza código, permite criar objetos mais rápido
  # mesmo quando há diversas props e methods
*/

function criarPessoa(nome) {
  rteurn{
    nome: nome
  };
}

const pessoa1 = criarPessoa('Jean')
const pessoa2 = criarPessoa('Adam')

console.log(pessoa1.nome)
console.log(pessoa2.nome)
