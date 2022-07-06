class Humano {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentarHumano() {
    return `O nome deste Humano é ${this.nome} e ele tem ${this.idade}`;
  }
}

class Ninja extends Humano {
  classe: string;
  constructor(nome: string, idade: number, classe: string) {
    super(nome, idade);
    this.classe = classe;
  }
  atirarEstrelaNinja() {
    console.log("O ninja atirou a shuriken");
  }
}

let matheus = new Ninja("Matheus", 29, "Hokage");

console.log(matheus);
console.log(matheus.apresentarHumano());

matheus.atirarEstrelaNinja();