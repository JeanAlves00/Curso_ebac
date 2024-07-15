"use strict";

//rest
function somar(a, b) {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    //argume e iteravel mas nao e um array
    soma += arguments[i];
  }
  return soma;
  //arguments.length
  //console.log(arguments)
  //return a + b
}
console.log(somar(2, 3, 4));
function somarComRest(...numeros /* So pode haver um funcao com tres pontos (...) */) {
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(2, 3, 4));

//spread
const numeros = [1, 2, 3, 4];
console.log(...numeros);
const timesDeFutebol1 = ['vasco', 'flamengo', 'fluminense'];
const timesDeFutebol2 = ['sao paulo', 'santos', 'palmeiras'];

//const timesDeFutebol = timesDeFutebol1.concat(timesDeFutebol2);

const timesDeFutebol = [...timesDeFutebol1, ...timesDeFutebol2];

//timesDeFutebol.concat(timesDeFutebol2)
console.log(timesDeFutebol);
const Julia = {
  nome: 'Julia',
  sobrenome: 'Oliveira',
  idade: 20
};
console.log(Julia);
const Matheus = {
  ...Julia,
  nome: 'Matheus'
};
console.log(Matheus);

// desestruturação
const sobreJulia = Julia.idade;
console.log(sobreJulia);
const {
  nome: nomeMatheus
} = Matheus;
console.log(nomeMatheus);
const [item1, item2, item3, ...resto] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(resto);