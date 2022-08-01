/*
  _ tipos de dados básicos

  - boolean
  - number
  - string

  # ts tem o type cast que garante que a variável seja do tipo indicado

  */

//_ arrays e objs
//- opção 1
export const list: number[] = [1, 2, 3];

//- opção 2
export const list2: Array<string> = ["joão", "maria"];

export const obj1 = { nome: "jean", idade: 29 };

//_ tuplas
// # para um conjunto de valores fixos

let pessoa: [string, number];
pessoa = ["Jean", 25];

//_ enum
// # conjunto apenas com valores numéricos, se não declarado valores númericos eles são salvos com valores auto incrementais começando em zero ou com base no primeiro valor declarado.
//@ se houver dois indíces iguais, como o 4 declarado abaixo, o 4 recebe o último valor passado, mas portas e a receberão o 4

enum Carro {
  Motor = 1,
  Portas = 4,
  Pedais = 3,
  a = 4,
}
console.log(Carro);

//_ any
//# quando não se sabe o tipo
//# permite qualquer tipo
//# evitar usar

let aindaNaoSeSabeOTipo: any;

aindaNaoSeSabeOTipo = 1;
aindaNaoSeSabeOTipo = true;
aindaNaoSeSabeOTipo = "test";

//_ void
//# void é o oposto do any
//# normalmente usado em funções
//# aceita apenas undefined

function logMessage(message: string) {
  console.log(message);
}

logMessage("Hello world");

//_ interfaces
//# é a possibilidade de criar uma função que recebe argumentos específicos
//# e os utiliza conforme usa lógica

function imprimir(obj: { nome: string; idade: number }) {
  console.log(obj.nome, obj.idade);
}

const pessoa2 = { nome: "jean", idade: 25 };
imprimir(pessoa2);

interface modelPessoa {
  nome: string;
  idade?: number; //# opcional
}

function criarPessoa(pessoa: modelPessoa): modelPessoa {
  let pessoaObj;
  if (pessoa.nome) {
    pessoaObj.nome = pessoa.nome;
  }
  if (pessoa.idade) {
    pessoaObj.idade = pessoa.idade;
  }

  return pessoaObj;
}

const jean = criarPessoa({ nome: "Jean" });
console.log(jean);

/*
  _ clases em ts usam a ideia da versão es6 e não a herança por prototype
*/

class CarroClass {
  marca: string;
  aro: number;

  constructor(marca: string, aro: number) {
    this.marca = marca;
    this.aro = aro;
  }
}

const ferrari = new CarroClass("Ferrari", 20);
console.log(ferrari);

/*
  _ herança também lembra a do es6
*/

class Animal {
  andar() {
    console.log("Andou");
  }
}

class Cachorro extends Animal {
  nome: string;
  constructor(nome: string) {
    super();
    this.nome = nome;
  }
  latir() {
    console.log("au au");
  }
}
