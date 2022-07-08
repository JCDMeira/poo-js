/*
  _ this dentro do objeto se refere a ele mesmo
*/
let pessoa = {
  nome: "Jean",
  idade: 24,
  caracteristicas: {
    olhos: "castanhos",
    cabelos: "castanhos",
    brincos: false,
    oculos: true,
  },
  posses: ["carteira", "chave", "celular"],

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
console.log(pessoa.caracteristicas);
console.log(pessoa.caracteristicas.cabelos);
console.log(pessoa.posses);
console.log(pessoa.posses[1]);

pessoa.falar = function () {
  console.log("óla");
};

//_ pode adicionar props ou metódos a objs já criados

pessoa.falar();

//_ pode deletar props ou metódos a objs já criados
//_ mas isso não é normalmente aplicado.
delete pessoa.falar;

console.log(pessoa);
