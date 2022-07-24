/*
  _ métodos e props no prototype

  - a ideia de utilizar o prototype é para que cada prop ou método adicionado nele não se repita a cada obj instânciado
  - então esta herança beneficia o código, criando uma ref para os novos objs, deixando o programa mais performático
  - não ocupando um novo espaço na memória a cada obj criado
*/

function Pessoa() {}

Pessoa.prototype.classe = "Mamífiro";
Pessoa.prototype.falar = function () {
  console.log("olá");
};

function Advogado() {}

Advogado.prototype.profissao = "Advogado";
Advogado.prototype = new Pessoa();
const joao = new Advogado();
joao.falar();
