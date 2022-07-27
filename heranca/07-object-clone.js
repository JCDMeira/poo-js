/*
  _ Resolvendo o problema

  - podemos utilizar uma estratégia de copiar um obj, resolvendo este problema
  - porém veja que o código fica complexo demais, talvez não seja o caso de utilizar herança pra isso
  - além de não utilizar prototypes nesta forma
*/

function objectClone(o, stuff) {
  let n;
  function F() {}

  F.prototype = o;

  n = new F();
  n.uber = o;

  for (const i in stuff) {
    n[i] = stuff[i];
  }

  return n;
}

function Veiculo() {
  this.carenagem = "aço";
  this.opicionais = ["blindagem", "lanterna led"];
}

const v = new Veiculo();

const ferrari = objectClone(v, { rodas: 4, marca: "ferrari" });

console.log(ferrari);
