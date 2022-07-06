function criarCarro(config) {
    var carro = { marca: "Default", aro: 16, tetoSolar: false, cor: "Preto" };
    if (config.marca) {
        carro.marca = config.marca;
    }
    if (config.aro) {
        carro.aro = config.aro;
    }
    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar;
    }
    if (config.cor) {
        carro.cor = config.cor;
    }
    return carro;
}
var bmw = criarCarro({ marca: "BMW", tetoSolar: true });
console.log(bmw);
var ferrari = criarCarro({ marca: "Ferrari", aro: 20, tetoSolar: false, cor: "Vermelho" });
console.log(ferrari);
