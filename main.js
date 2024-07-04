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


const nome = "jean";
const sobrenome = "carlos";
const idade = 23;
const ehMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome);
console.log(typeof sobrenome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log (typeof carroDaMaria2);
console.log (typeof carroDoJoao2);

console.log(carroDaMaria2 instanceof Carro);
console.log(carroDoJoao2 instanceof Carro);
console.log(conhecimentos instanceof Array);