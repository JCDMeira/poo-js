/*
  _ loop prar objs

  - obs: um pouco off topic de prototype
  - o loop mais indicado para percorrer objetos é o for ... in
  - isso porque o for normal serve mais para arrays
*/

function Pessoa(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

const p = new Pessoa("João", "silva", 40);

for (const prop in p) {
  console.log(prop + " -> " + p[prop]);
}
