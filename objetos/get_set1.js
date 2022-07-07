/*
  _ this dentro do objeto se refere a ele mesmo
*/
let pessoa = {
  nome: "Jean",
  idade: 24,

  getNome: function (params) {
    console.log("O nome é:" + this.nome);
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
  getIdade() {
    console.log(this.idade);
  },
  fezAniversario() {
    this.idade++;
  },
};

pessoa.getNome();
pessoa.setNome("André");
pessoa.getNome();
pessoa.getIdade();
pessoa.fezAniversario();
pessoa.getIdade();
