"use strict";

const minhaFuncao = () => "eu sou uma arrow function"; // nao precisa de um retorn padrao

const retornaUmCarro = () => ({
  nome: 'fusca',
  ano: 1970
});
console.log(minhaFuncao()); //eu sou uma arrow function
console.log(retornaUmCarro());