/*
  _ verificando props do prototype

  - da mesma forma que o obj tem métodos de verificar props
  - os prototypes também
*/

function Pessoa(name) {
  this.name = name;
}

Pessoa.prototype.name = "estava sobrescrito";

const jean = new Pessoa("jean");

console.log(jean.hasOwnProperty("name"));
console.log(jean.constructor.prototype.hasOwnProperty("name"));

console.log("------------");
/*
  _ distinguir se é prop do obj ou do prototype

  - é claro que utilizando o método hasOwnProperty conseguimos saber se a prop é do obj ou do prototype
*/

function Pessoa2(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

Pessoa2.prototype.job = "programador";

const p = new Pessoa2("João", "silva", 40);

console.log(p.hasOwnProperty("job"));
console.log(p.constructor.prototype.hasOwnProperty("job"));

if (p.hasOwnProperty("job")) {
  console.log("a prop job é do obj");
} else if (p.constructor.prototype.hasOwnProperty("job")) {
  console.log("a prop job é do prototype");
} else {
  console.log("a prop job não existe");
}

if (p.hasOwnProperty("name")) {
  console.log("a prop name é do obj");
} else if (p.constructor.prototype.hasOwnProperty("name")) {
  console.log("a prop name é do prototype");
} else {
  console.log("a prop name não existe");
}
