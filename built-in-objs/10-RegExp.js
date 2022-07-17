/*
  _ RegEx

  - objs para tratar expressões regulares
  - da pra usar métodos como test e exec
*/

let regex = new RegExp(/t/);

console.log(regex.test("teste"));
console.log(regex.test("opa"));
