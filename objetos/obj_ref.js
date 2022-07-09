/*
  _  Passando referência de objeto

  - quando se atribui um obj já criado para uma outra variável, só se está passando a referência de memória desse obj.
  - se alterar a referência, o original também é alterado
*/

let obj = {
  teste: 1,
};

let copia = obj;

copia.teste = 2;

console.log(obj, copia);
