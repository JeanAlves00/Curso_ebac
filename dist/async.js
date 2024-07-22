"use strict";

function funcaoMuitoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Deu erro na iteração dos números');
  }
});
const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com o usuario: ${login}`);
    }, 3000);
  });
};
async function execucaoPrincipal() {
  console.log("inicio");

  //console.log(funcaoMuitoPesada())
  //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log(e);
  }
  promiseComParametros('gustavo', 123).then(resultado => {
    console.log(resultado);
  });
  console.log("fim");
}
execucaoPrincipal();