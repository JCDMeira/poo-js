/*
  _ Prototype methods

  - são métodos que já existem na Class, por exemplo os getters e setters
*/

const Tenis = class {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
  }
  modeloDoTenis() {
    return this.modelo;
  }
  set trocarModelo(novoModelo) {
    this.modelo = novoModelo;
  }

  get obterModelo() {
    return "O modelo do tênis é: " + this.modelo;
  }
};

const allstar = new Tenis("All star", "preto");

allstar.trocarModelo = "All star 2.0";
console.log(allstar.obterModelo);
