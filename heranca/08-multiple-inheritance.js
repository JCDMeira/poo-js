/*
  _ herança múltipla

  - uma estrutura difícil de manter e o js não nos dá esta funcionalidade de forma fácil, precisamos criar a função
  -melhor optar por prototype chain
*/

function multi(...arguments) {
  let n = {},
    stuff;

  for (let j = 0; j < arguments.length; j++) {
    stuff = arguments[j];

    for (const i in stuff) {
      if (stuff.hasOwnProperty(i)) {
        n[i] = stuff[i];
      }
    }
  }

  return n;
}

const pneu = { material: "borracha" };
const aro = { tamanho: 20 };

const pneuMontado = multi(pneu, aro);
console.log(pneuMontado);
