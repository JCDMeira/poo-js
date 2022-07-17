/*
  _ String

  - É possível criar uma string em obj com o new
  - tem acesso a prop length
  - da pra acessar os caracteres pelos seus índices
*/

const stringObj = new String("teste");

const string = "teste";

console.log(stringObj.length);
console.log(string.length);

console.log(stringObj[1]);
console.log(string[1]);

/*
  _ String 2

  - tem diversos métodos
  - como nos arrays, é de suma importância saber esses métodos
*/

const string2 = "teste";

console.log(string.toUpperCase());
console.log("STRING".toLowerCase());
console.log(string.charAt(4));
console.log(string.indexOf("s"));
console.log(string.indexOf("est"));

/*
  _ String 3

  - outros métodos
*/

console.log(string.slice(1, 3));
console.log(string.substring(1, 3));
console.log(string.split(""));
