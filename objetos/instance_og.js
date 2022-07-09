/*
  _ operador instanceof

  - maneira de saber de qual instância (pai) vem o objeto
  - mais prático que usar o constructor

  # sempre é uma instância de Object
*/

function Robo(nome, arma) {
  this.nome = nome;
  this.arma = arma;
}

function Humano(nome) {
  this.nome = nome;
}

const android = new Robo("Xyz", "Espada");

console.log(android instanceof Robo);
console.log(android instanceof Humano);
console.log(android instanceof Object);
