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

let matheus = new Humano("Matheus", 29);

console.log(matheus);
console.log(matheus.apresentarHumano());