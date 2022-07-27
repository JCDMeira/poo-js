/*
  _ subclasses

  - uma forma de criar herança com as classes
  - utilizando a palavra extends, uma classe herda as props de outra
*/

class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }
  latir() {
    console.log("Au Au");
  }
}

const bob = new Cachorro("Caramelo", 3, "shitzu");
bob.latir();
console.log(bob.nome);
console.log(bob);
