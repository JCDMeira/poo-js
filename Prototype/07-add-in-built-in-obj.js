/*
  _ melhorando os objetos do JS

  - adicionar novos métodos e props para os objs js
*/

Array.prototype.checkLength = function () {
  return this.length;
};

const a = [1, 2, 3];
console.log(a.checkLength());

/*
  _ proque não é uma excelente ideia

  - futuramente pode vir um método com o mesmo nome na linguagem
  - desenvolvedores podem desconhecer o método, não sabendo de onde ele vem, gerando confução
  - para minimizar os problemas, faça uma checagem antes
*/

if (typeof Array.prototype.checkLength2 !== "function") {
  Array.prototype.checkLength2 = function () {
    return this.length;
  };
}
