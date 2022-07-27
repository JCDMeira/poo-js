/*
  _ Métodos estáticos

  - métodos que só funcionam caso você utilize o nome da classe.
  - ou seja, você não cria um novo objeto para usar eles
  - utilizado muito como um helper
*/

class Calc {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Calc.soma(2, 5));
