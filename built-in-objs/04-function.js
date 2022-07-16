/*
  _ Function

  - o obj para criar funções
  - é possível criar novas funções a partir de new
  # não é utilizado, serve apenas para conhecimento e para entender mais do funcionamento do js
*/

let teste = new Function("a", "return arguments");

console.log(teste("testando function"));

/*
  _ Function 2

  - pode se utilizar da prop length para saber o número de argumentos da função
  - também é possível usar o toString
*/

function test(a, b) {
  return a + b;
}

console.log(test.length);

/*
  _ Function 3

  - métodos call e apply
  - call pode pegar métodos emprestados de objs
  - apply funciona igual ao call, mas todos parâmetros são transformados em array
*/

let a = {
  name: "A",
  falar() {
    console.log("Olá, sou o " + this.name);
  },
};

b = { name: "B" };

a.falar.call(b);
