/*
  _ Comparando objetos via método

  - Comparar objs com o método is
  - mesmo resultados de ===
  - salvo para NaN com NaN e +0 com -0 (que neste método são considerados como iguais)
*/

function Robo(nome, arma) {
  this.nome = nome;
  this.arma = arma;
}

const robo1 = new Robo("Rb", "faca");
const robo2 = new Robo("Rb", "faca");

console.log("objetos :", Object.is(robo1, robo2));

robo3 = robo1;

console.log("objetos por referência :", Object.is(robo1, robo3));

console.log("NaN  com is:", Object.is(NaN, NaN));
console.log("NaN com ===:", NaN === NaN);

console.log("+0 e -0 com is:", Object.is(+0, -0));
console.log("+0 e -0 com ===:", +0 === -0);
