/*
  _ Exercício 2:

  - crie um obj com uma prop nome
  - crie método que exive o nome do obj pessoa
*/

const pessoa = {
  nome: "Jean",
  exibirNome() {
    console.log(this.nome);
  },
};

pessoa.exibirNome();
