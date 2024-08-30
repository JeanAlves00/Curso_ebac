type aluno = {
    nome: string,
    cursos?: string[],
    idade: number,
}

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
]

alunos.push({
    nome: 'Joaquim',
    cursos: ['Javascript', 'Typescript'],
    idade: 25,
})

const novoAluno: aluno = {
    nome: "lucas",
    idade: 32,
}

function exibeAluno (aluno: aluno) {
    console.log(aluno.nome);
}