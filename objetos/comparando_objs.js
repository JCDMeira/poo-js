/*
  _ Comparando objetos

  - Só são iguais criando uma referência
  - objetos criados a partir de um constructor sempre seão diferentes
*/

function Robo(nome, arma) {
  this.nome = nome;
  this.arma = arma;
}

const robo1 = new Robo("Rb", "faca");
const robo2 = new Robo("Rb", "faca");

console.log(robo1 === robo2);

const robo3 = robo1;

console.log(robo1 === robo3);
