let carro = {
  portas: 4,
  cor: "vermelha",
  opicionais: ["teto solar", "blindagem"],
};

console.log(carro);
console.log(typeof carro);

//_ acessando propriedades
console.log(carro.portas);
console.log(carro["cor"]);

carro.opicionais.map((op) => console.log(op));
