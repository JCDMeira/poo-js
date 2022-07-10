/*
  _ Atributos das propriedades

  - Toda prop tem atributos já criados pela linguagem
    - enuberable e configurable
  - configurable, por exemplo, se estiver false, não deixa a prop ser editada ou deletada
*/

const pessoa = {
  nome: "Jean",
};

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"));
