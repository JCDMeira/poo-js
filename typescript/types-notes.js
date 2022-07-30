/*
  _ tipos de dados básicos

  - boolean
  - number
  - string

  # ts tem o type cast que garante que a variável seja do tipo indicado

  */
//_ arrays e objs
//- opção 1
var list = [1, 2, 3];
//- opção 2
var list2 = ["joão", "maria"];
var obj1 = { nome: "jean", idade: 29 };
//_ tuplas
// # para um conjunto de valores fixos
var pessoa;
pessoa = ["Jean", 25];
//_ enum
// # conjunto apenas com valores numéricos, se não declarado valores númericos eles são salvos com valores auto incrementais começando em zero ou com base no primeiro valor declarado.
var Carro;
(function (Carro) {
    Carro[Carro["Motor"] = 1] = "Motor";
    Carro[Carro["Portas"] = 4] = "Portas";
    Carro[Carro["Pedais"] = 3] = "Pedais";
    Carro[Carro["a"] = 4] = "a";
})(Carro || (Carro = {}));
console.log(Carro);
