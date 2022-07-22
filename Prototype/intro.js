/*
  _ o que são prototypes?

  -js é uma linguagem considerada baseada em prototypes
  - todos objs do js herdam props e métodos do seu prototype
  - como em built in objects
  - a ideia central é que todo obj tenha um pai (ou seja, um prototype)

  _ A propriedade prototype

  - funcões além de suas pros, também venham com a propriedade protorype criada
  - recebemos um obj vazio, que pode ter props e métodos adicionais

  _ adicionando props e métodos com prototype

  - como adicionar props e métodos
  - não  há diferença em acessá-las
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

/*
  _ adicionando múltiplar props e métodos

  - não presica adicionar uma a uma
*/

function Pessoa2(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype = {
  profissao: "Estudante",
  falar() {
    console.log("Olá");
  },
};

const juan = new Pessoa("Juan", 15);
juan.falar();
console.log(juan.profissao);
