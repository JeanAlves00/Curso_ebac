function soma (a, b) {
  return a + b;
}

function subtracao (a, b) {
  return a - b;
}

function multiplicacao (a, b) {
  return a * b;
}

function divisao (a, b) {
    return a / b;
}

console.log(soma(1, 2)); // 3
console.log(subtracao(1, 2)); // -1

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}