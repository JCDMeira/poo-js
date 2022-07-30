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
