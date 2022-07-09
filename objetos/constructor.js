/*
  _ constructor

  - sempre que um obj é criado, há uma prop constructor
  - contem a referência de como o objeto for criado
  # consegue saber a origem do objeto que foi criado
*/

function criarArvore(especie, temFruto) {
  return {
    especie: especie,
    temFruto: temFruto,
  };
}

const laranjeira = criarArvore("Laranjeira", true);

console.log(laranjeira);
console.log(laranjeira.constructor);
