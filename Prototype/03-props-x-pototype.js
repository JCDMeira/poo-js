/*
  _ props do obj x props do prototype

  - a ordem de acesso é: primeiro o obj e depois o prototype
  - as props podem coexistir
*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.idade = 10;
Pessoa.prototype.cabelo = "castanho";

const pedro = new Pessoa("Pedro", 15);

console.log(pedro.idade);
console.log(pedro.cabelo);

pedro.cabelo = "louro";
console.log(pedro.cabelo);

/*
  _ maneira de utilizar o prototype se já tem prop

  - podemos deletar uma propriedade, e voltar a utilizar o prototype
  - pois mesmo sendo sobrescrito, ainda estará disponível
*/

Pessoa.prototype.nome = "estava sobrescrito";

const pessoa = new Pessoa("teste", 2);

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);
