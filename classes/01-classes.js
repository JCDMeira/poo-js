/*
  _ classes no js

  - as classes na verdade são funções, ou seja, muda a forma de nós escrevermos, mas o js utiliza as mesmas técnicas que utilizamos antes
  - tornando este método um syntatic sugar
  - então aprender como funciona por baixo dos panos, como foi visto ao longo do curso, nos ajudará a entender estes conceitos novos de forma mais fácil
*/

/*
  _ definindo classes

  - a declaração é bem parecida com constructor functions
  - as propriedades devem ficar num método especial chamado constructor
  - onde serão inicializadas
*/

class Tenis {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
  }
}

console.log(typeof Tenis);
const allstar = new Tenis("All star", "branco");
