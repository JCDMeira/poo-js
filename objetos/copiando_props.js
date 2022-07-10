/*
  _ Copiando propriedades

  - Os objs herdam métodos do obj pai Object
  - para copiar props se usa o método assign
*/

const robo1 = {
  arma: "lança granada",
};

const robo2 = {};

Object.assign(robo2, robo1);
console.log(robo2);
