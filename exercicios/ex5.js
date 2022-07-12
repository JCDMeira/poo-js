/*
  _ Exercício 5:

  - crie um obj inimigo com as props nome e vivo (boolean)
  - criar o método atirarShuriken  da aula passada deve matar o inimigo, setando vivo como false
*/

function Ninja(nome, shurikens) {
  this.nome = nome;
  this.shurikens = shurikens;

  this.atirarShuriken = function (alvo) {
    if (this.shurikens >= 1) {
      this.shurikens -= 1;
      console.log("Lança shuriken no", alvo.nome);

      alvo.vivo = false;
    } else {
      console.log("Acabaram as shurikens");
    }
  };
}

function Inimigo(nome) {
  this.nome = nome;
  this.vivo = true;
}

const ninja1 = new Ninja("Ninja1", 2);

const inimigo1 = new Inimigo("inimigo1");
ninja1.atirarShuriken(inimigo1);
console.log(inimigo1.nome, "vivo:", inimigo1.vivo);
