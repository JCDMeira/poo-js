var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "O nome deste Humano \u00E9 " + this.nome + " e ele tem " + this.idade;
    };
    return Humano;
}());
var matheus = new Humano("Matheus", 29);
console.log(matheus);
console.log(matheus.apresentarHumano());
