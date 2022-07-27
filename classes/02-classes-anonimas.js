/*
  _ Outra maneira de criar classes

  - criando classes anõnimas
*/

const Tenis = class {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
  }
  modeloDoTenis() {
    return this.modelo;
  }
};

const allstar = new Tenis("All star", "preto");
console.log(allstar);
