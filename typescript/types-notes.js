"use strict";
/*
  _ tipos de dados básicos

  - boolean
  - number
  - string

  # ts tem o type cast que garante que a variável seja do tipo indicado

  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.obj1 = exports.list2 = exports.list = void 0;
//_ arrays e objs
//- opção 1
exports.list = [1, 2, 3];
//- opção 2
exports.list2 = ["joão", "maria"];
exports.obj1 = { nome: "jean", idade: 29 };
//_ tuplas
// # para um conjunto de valores fixos
var pessoa;
pessoa = ["Jean", 25];
//_ enum
// # conjunto apenas com valores numéricos, se não declarado valores númericos eles são salvos com valores auto incrementais começando em zero ou com base no primeiro valor declarado.
//@ se houver dois indíces iguais, como o 4 declarado abaixo, o 4 recebe o último valor passado, mas portas e a receberão o 4
var Carro;
(function (Carro) {
    Carro[Carro["Motor"] = 1] = "Motor";
    Carro[Carro["Portas"] = 4] = "Portas";
    Carro[Carro["Pedais"] = 3] = "Pedais";
    Carro[Carro["a"] = 4] = "a";
})(Carro || (Carro = {}));
console.log(Carro);
//_ any
//# quando não se sabe o tipo
//# permite qualquer tipo
//# evitar usar
var aindaNaoSeSabeOTipo;
aindaNaoSeSabeOTipo = 1;
aindaNaoSeSabeOTipo = true;
aindaNaoSeSabeOTipo = "test";
//_ void
//# void é o oposto do any
//# normalmente usado em funções
//# aceita apenas undefined
function logMessage(message) {
    console.log(message);
}
logMessage("Hello world");
//_ interfaces
//# é a possibilidade de criar uma função que recebe argumentos específicos
//# e os utiliza conforme usa lógica
function imprimir(obj) {
    console.log(obj.nome, obj.idade);
}
var pessoa2 = { nome: "jean", idade: 25 };
imprimir(pessoa2);
function criarPessoa(pessoa) {
    var pessoaObj = { nome: "teste", idade: 0 };
    if (pessoa.nome) {
        pessoaObj.nome = pessoa.nome;
    }
    if (pessoa.idade) {
        pessoaObj.idade = pessoa.idade;
    }
    return pessoaObj;
}
var jean = criarPessoa({ nome: "Jean" });
console.log(jean);
/*
  _ clases em ts usam a ideia da versão es6 e não a herança por prototype
*/
var CarroClass = /** @class */ (function () {
    function CarroClass(marca, aro) {
        this.marca = marca;
        this.aro = aro;
    }
    return CarroClass;
}());
var ferrari = new CarroClass("Ferrari", 20);
console.log(ferrari);
/*
  _ herança também lembra a do es6
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.andar = function () {
        console.log("Andou");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        return _this;
    }
    Cachorro.prototype.latir = function () {
        console.log("au au");
    };
    return Cachorro;
}(Animal));
//_ funções-> recebem os tipos e também o tipo do retorno
function Somar(num1, num2) {
    return num1 + num2;
}
console.log(Somar(5, 6));
// console.log(Somar(5, "6"));
function teste(frase) {
    return frase ? frase : "não recebeu frase";
}
console.log(teste());
console.log(teste("teste"));
