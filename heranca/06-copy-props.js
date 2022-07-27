/*
  _ copiando propriedades

  - podemos  em vez de utilizar o fake constructor, copiar as props por um loop e realizar a herança
  - precisamos utilizar a prop uber, que, que nos dará acesso ao obj pai
  - a parte ruim desta abordagem é que ela recria as props e métodos
*/

function extend(Filho, Pai) {
  const paiProto = Pai.prototype;
  const filhoProto = Filho.prototype;

  for (const i in paiProto) {
    filhoProto[i] = paiProto[i];
  }

  // filho tem acesso ao obj pai
  filhoProto.uber = paiProto;
}

function Veiculo() {}
Veiculo.prototype.motor = 1;
Veiculo.prototype.carenagem = "aço";

function Carro(cor) {
  this.cor = cor;
}
Carro.prototype.portar = 4;

extend(Carro, Veiculo);

const bmw = new Carro("azul");

console.log(bmw.carenagem);

/*
  _ outro problema ao copiar por loop

  - os arrays ficam alocados na memória e é criado apenas uma referência, fazendo com que se o array filho se altere o do pai  também
*/

Veiculo.prototype.opicionais = ["teto solar", "aro de alumínio", "display 8"];

extend(Carro, Veiculo);

console.log(Veiculo.prototype);
Carro.prototype.opicionais.push("blindagem");
console.log(Veiculo.prototype);
