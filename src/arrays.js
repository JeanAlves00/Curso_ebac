const redeSociais = ['instagram', 'facebook', 'twitter'];

for (let i = 0; i < redeSociais.length; i++) {
    console.log(`Eu tenho uma rede social chamada ${redeSociais[i]}`);
}

redeSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`${indice} Eu tenho uma rede social chamada: ${nomeDaRedeSocial}`)
})

const alunos = ['gustavo', 'gabriel', 'lucas', 'pedro'];

const alunos2 = alunos.map(function(aluno) {
    aluno = {
        nome: aluno,
        curso: 'frontend'
    }

    return aluno;

    //O return tambem funcionaria como o console.log apenas trocando o aluno por return
})

console.log(alunos2)

const gustavo = alunos2.find(function(item) {
    return item.nome == 'gustavo';
})

console.log(gustavo)

const indiceDoGustavo = alunos2.findIndex(function(item) {
    return item.nome == 'gustavo';
})

console.log(indiceDoGustavo)

//every
const alunosFrontEnd = alunos2.every(function(item) {
    return item.curso == 'frontend';
})

console.log(alunosFrontEnd)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobroDosNumeros = numeros.map(function(numero) {
    numero *= 2; // numero = numero * 2;
    return numero; // return numero * 2 tambem fazeria o mesmo sem utilizar a linha acima.
})

console.log(dobroDosNumeros)