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

/*
  _ Isolando a herança em uma função

  - para facilitas as coisas e deixar a herança reutilizável também, podemos utilizar uma função
*/

function extend(Filho, Pai) {
  const F = function () {};

  F.prototype = Pai.prototype;
  Filho.prototype = new F();
}

function Dev() {}
Dev.prototype.profissao = "Dev";

//herança
extend(Dev, Pessoa);

const jean = new Dev();
jean.falar();
