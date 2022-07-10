/*
  _ Destructuring

  - Um recurso ES6
  - pode desestruturar o objeto em várias variáveis
*/

const rpg = {
  sistema: "dnd 5e",
  nome_da_campanha: "imersão no continente caído",
  players: "4",
};

const { sistema, nome_da_campanha: campanha, players } = rpg;
console.log(sistema);
console.log(campanha);
console.log(players);

/*
  _ Destructuring 2

  - mudando valor de variáveis já criadas
  #  tem que ter o mesmo nome da chave do obj
*/

let nome_da_campanha = "escolha";

console.log(nome_da_campanha);

({ nome_da_campanha } = rpg);

console.log(nome_da_campanha);

/*
  _ Destructuring  3

  - funciona com arrays
  - conta a ordem colocada
*/

const nums = [1, 2, 3];

const [num1, num2, num3] = nums;
console.log(num1, num2, num3);

/*
  _ Destructuring 4 - rest operator

  - rest operator é usado quando não se sabe quantos argumentos virão para o destructuring
  - pode criar um array com o tamanho infinito com os restos dos elementos passados
  # agrupa todos os demais elementos em um array
*/

let [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b);
