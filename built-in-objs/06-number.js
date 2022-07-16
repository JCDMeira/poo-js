/*
  _ Number

  - O Number também é um objeto para tratar números
  - tem métodos parseInt e parseFload
  - é possível criar um number com new Number
*/

console.log(Number.parseInt(12.7327)); //?12
console.log(parseInt(12.7327)); //?12

console.log(Number.parseFloat("12.83")); //?12.83

const num = new Number(13);

console.log(num);

/*
  _ Number 2

  - Algumas props são MAX_VALUE e MIN_VALUE
    - para indicar o máximo e o mínimo que o JS atinge
*/

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.NaN);

/*
  _ Number 3

  - Alguns outros métodos importantes de Number
    - toFixed
    - toPrecision
    - toExponential

  - é possível usar apenas o método sem usar a palavra Number
*/

console.log((123.3445567).toFixed(2)); //? 123.34
console.log((123.34).toFixed()); //? 123
console.log((123.345).toPrecision(2)); //? 1.2e+2
console.log((123.345).toPrecision(3)); //? 123
console.log((3.345).toPrecision(3)); //? 3.35
console.log((1000).toExponential()); //? 1e+3
