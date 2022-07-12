/*
  _ Exercício 4:

  - crie um obj ninja
  - use constructor function
  - deve ter as props nome e shurikens
  - criar o método atirarShuriken  que subtraí uma shuriken e não atira se não tiver mais delas
*/

function Ninja(nome, shurikens) {
  this.nome = nome;
  this.shurikens = shurikens;

  this.atirarShuriken = function () {
    if (this.shurikens >= 1) {
      this.shurikens -= 1;
      console.log("Lança shuriken");
    } else {
      console.log("Acabaram as shurikens");
    }
  };
}

const ninja1 = new Ninja("Ninja1", 2);
ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();
console.log(ninja1.nome);
