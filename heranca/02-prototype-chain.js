/*
  _ prototype chain

  - é maneira default da linguagem de fazer herança
  - podemos instanciar objs no prototype de outros, criando a herança
*/

function Pessoa() {
  this.classe = "mamífero";
  this.falar = function () {
    console.log("olá");
  };
}

function Advogado() {
  this.profissao = "Advogado";
}

Advogado.prototype = new Pessoa();

const joao = new Advogado();
joao.falar();

/*
  _ Checando a herança

  - quando utilizamos a prototype chain, o obj passa a virar instância de todos os 'pais
  - é possível verificar isso pela instrução instanceof
*/

console.log(joao instanceof Advogado);
console.log(joao instanceof Pessoa);
console.log(joao instanceof Object);
