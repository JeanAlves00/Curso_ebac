"use strict";
const alunos = [
    {
        nome: 'Jean',
        cursos: ['Javascript', 'Typescript'],
        idade: 23,
    },
    {
        nome: 'Maria',
        cursos: ['Javascript', 'Typescript'],
        idade: 27,
    },
    {
        nome: 'João',
        cursos: ['Javascript', 'Typescript'],
        idade: 24,
    },
];
alunos.push({
    nome: 'Joaquim',
    cursos: ['Javascript', 'Typescript'],
    idade: 25,
});
const novoAluno = {
    nome: "lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
