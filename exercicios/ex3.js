/*
  _ Exercício 3:

  - crie um obj ninja
  - use constructor function
  - deve ter a prop nome e método atirarShuriken
*/

function Ninja(nome) {
  this.nome = nome;
  this.atirarShuriken = function () {
    console.log("Lança shuriken");
  };
}

const ninja1 = new Ninja("Ninja1");
ninja1.atirarShuriken();
console.log(ninja1.nome);
