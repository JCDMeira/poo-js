/*
  _ Exercício 8:

  - criar um obj que tenha características de um caminhão e coloque em props diferentes
  - com destructuring colooque essas props em variáveis separadas
*/

const caminhao = {
  eixos: 6,
  combustivel: "diesel",
  carga: "gasolina",
  manutencao: "12/06/2022",
};

const { eixos, combustivel, carga, manutencao } = caminhao;
console.log(eixos);
console.log(combustivel);
console.log(carga);
console.log(manutencao);
