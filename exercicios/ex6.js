/*
  _ Exercício 6:

  - criar função que retorna se um obj é instância de outro
  - deve retornar a mensagem de positivo e negativo
*/
function compareObjs(obj1, obj2) {
  if (obj1 instanceof obj2) {
    console.log("O objeto 1 é instância do objeto 2 ");
  } else {
    console.log("O objeto 1 não é instância do objeto 2");
  }
}

function Robo(nome, arma) {
  this.nome = nome;
  this.arma = arma;
}

function Humano(nome) {
  this.nome = nome;
}

const android = new Robo("Xyz", "Espada");

compareObjs(android, Robo);
compareObjs(android, Humano);
