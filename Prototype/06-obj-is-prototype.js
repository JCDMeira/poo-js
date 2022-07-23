/*
  _ checar se obj é prototype de outro objs

  - com método isPrototypeOf
*/

let caracteristicas = {
  maos: 2,
  pes: 2,
  pernas: 2,
};

function Humano(name) {
  this.name = name;
}

Humano.prototype = caracteristicas;

const p = new Humano("João");

console.log(caracteristicas.isPrototypeOf(p));
