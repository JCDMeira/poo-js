/*
  _ Exercício 7:

  - criar dois objs que compartilhes nomes e propriedades via object literals
  - um variável deve definir a parte que se repete nas propriedades dos objetos
*/

const pre_name = "tipo_de_";

const carro = {
  [pre_name + "transporte"]: "terrestre",
};

const rpg = {
  [pre_name + "jogo"]: "tabuleiro",
};

const colar = {
  [pre_name + "acessorio"]: "bijuteria",
};

console.log(carro);
console.log(rpg);
console.log(colar);
