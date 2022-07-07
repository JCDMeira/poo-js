/*
  _ this dentro do objeto se refere a ele mesmo
*/
let pessoa = {
  nome: "Jean",

  getNome: function (params) {
    console.log("O nome é:" + this.nome);
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

pessoa.getNome();
pessoa.setNome("André");
pessoa.getNome();
