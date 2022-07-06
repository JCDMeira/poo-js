function imprimirDados(obj) {
    console.log("Esta pessoa se chama " + obj.nome + " e tem " + obj.idade + " anos");
}
var pessoa1 = { nome: 'Matheus', idade: 29 };
imprimirDados(pessoa1);
var pessoa2 = { nome: 'Bruno', idade: 30 };
imprimirDados(pessoa2);
