/*
  _ Constructor temporário

  - caso você tenha uma solução que não te deixaria por props e métodos que não são alteráveis, você pode utilizar um constructor temporário e resolver o problema
*/

// clonando apenas o prototype de Pessoa, com constructor temporário

//constructor temporário
let F = function () {};

function Pessoa() {}

Pessoa.prototype.classe = "Mamífiro";
Pessoa.prototype.falar = function () {
  console.log("olá");
};

function Advogado() {}

Advogado.prototype.profissao = "Advogado";
Advogado.prototype = Pessoa.prototype;

F.prototype = Pessoa.prototype;
Advogado.prototype = new F();
