/*
  _ object literals

  - função do es6
  - permite criar objetos mais rapidamente
  - utilizando nomes de variáveis para nomes de propriedades

  # já pega a variável e atribui como par chave e valor
*/

let x = 1,
  y = 2;

let obj = { x, y };
console.log(obj);

/*
  _ parte 2

  - pode declrar o método diretamente sem o function (es6)
*/

let robo = {
  nome: "megazord",
  arama: "lazer",
  ataque() {
    console.log("raio lazer");
  },
};

robo.ataque();

/*
  _ parte 3

  - pode se criar props com variáveis ou retornos de funções
  - ajuda a escrever menos códigos
*/

let tipo = "tipo_de_";

let carro = {
  [tipo + "carro"]: "suv",
};

let barco = {
  [tipo + "barco"]: "iate",
};

console.log(carro.tipo_de_carro);
