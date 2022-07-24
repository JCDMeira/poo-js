/*
  _ aumentando ainda mais a eficiência

  - utilizar o proptype é uma boa prática
  - prática de clonar apenas o prototype em vez da instância toda do obj
*/

function Pessoa() {}

Pessoa.prototype.classe = "Mamífiro";
Pessoa.prototype.falar = function () {
  console.log("olá");
};

function Advogado() {}

Advogado.prototype.profissao = "Advogado";
Advogado.prototype = Pessoa.prototype;

const joao = new Advogado();
console.log(Advogado.prototype);
joao.falar();

/*
  _ precauções

  - utilizando a abordagem de clonar só o prototype tem um side effect
  - se mudar o prototype toda a cadeia que o utiliza vai ser alterada também
  - então utilize desse jeito apenas quando não precisa mudar métodos e props
*/
