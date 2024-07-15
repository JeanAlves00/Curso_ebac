const minhaFuncao = (/*argumentos. Quando e apenas um argumento nao precisa dos parenteses, se for mais de um ou nenhum, ai sim ira precisar de um argumento*/) => "eu sou uma arrow function"; // nao precisa de um retorn padrao

const retornaUmCarro = (/*argumentos. Quando e apenas um argumento nao precisa dos parenteses, se for mais de um ou nenhum, ai sim ira precisar de um argumento*/) => ({
    nome: 'fusca', 
    ano: 1970
});

console.log(minhaFuncao())//eu sou uma arrow function
console.log(retornaUmCarro())

const carro = {
    velocdadeAtual: 40,
    acelerar: function () {
        this.velocdadeAtual += 10
    }
    frear: () => {
        this.velocdadeAtual -= 10
    }
}// na arrow nao funciona o this direito sem ser no navegador

carro.acelerar();
carro.frear();

console.log (carro.velocdadeAtual)