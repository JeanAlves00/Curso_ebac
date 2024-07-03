const carroDoJoao = {
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: 2022,
    anoFabricacao: 2021,
    cor: 'preto',
    cambio: 'manual',
    buzina: function() {
        console.log('buzinando');
    }
}

const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'ford',
    anoModelo: 2022,
    anoFabricacao: 2021,
    cor: 'vermelho',
    cambio: 'automatico',
    buzina: function() {
        console.log('buzinando');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao, cor, cambio) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
    this.cambio = cambio;
    this.acelerar = function() {
        console.log('acelerando');
    }
}

const carroDoJoao2 = new Carro("fiesta", "ford", 2022, 2021, "preto", "manual");
const carroDaMaria2 = new Carro("ka", "ford", 2022, 2021, "vermelho", "automatico");

console.log(carroDoJoao2);
console.log(carroDaMaria2);