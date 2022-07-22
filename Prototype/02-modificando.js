/*
  _ modificando prototypes após instanciar um obj

  - ao alterar o prototype, todas as instâncias ganham seus novos métodos ou props
*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.profissao = "Estudante";
Pessoa.prototype.falar = function () {
  console.log("Olá mundo");
};

const Joao = new Pessoa("João", 15);
Joao.falar();
console.log(Joao.profissao);

Pessoa.prototype.gritar = function () {
  console.log("ahhhhh");
};

Joao.gritar();
