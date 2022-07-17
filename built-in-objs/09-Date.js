/*
  _ Date

  - lida com datas
  - da pra criar nova data
    - a partir de agora
    - a partir de de uma data indicada
  # meses começãm em 0 e vão até 11

*/

console.log(new Date());
console.log(new Date(2020, 4, 30));
console.log(new Date(2022, 10, 30));
console.log(new Date(1357027200000));

let date = new Date();
console.log("---");
console.log(date.setMonth(5));
console.log(Date.parse("Apr 22, 2019"));
console.log(Date.now());
console.log(new Date(Date.now()));
