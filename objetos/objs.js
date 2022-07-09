/*
  _ this dentro do obj

  - se refere a própria instância
  - pode ajudar a chamar propriedades e métodos
*/

/*
  _ constructor functions

  - criar um obj pela constructor function
  - uma grande vantagem é que este método aceita parâmetros para o obj
*/
function Pessoa(nome) {
  this.nome = nome;
}

const pessoa1 = new Pessoa("Jean");
const pessoa2 = new Pessoa("Yuri");

console.log(pessoa1.nome);
console.log(pessoa2.nome);
