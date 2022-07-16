/*
  _ Array

  - obj pai de todos os arrays
  - pode instanciar um array com new
  - possui também props e métodos
*/

let a = new Array(1, 2, 3);
a[3] = 4;

a.toString();

console.log(Array instanceof Object);

/*
  _ Array 2

  - prop length indica o número de itens do array
  - alguns métodos: push, pop e join
  - métodos do array são extremamente importantes em js
*/

let b = [];

b.push("elemento");

console.log(b);

b.pop(); //? remove o último elemento

console.log(b);
