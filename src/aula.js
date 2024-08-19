const alunos = [
    {nome: 'João', nota: 5},
    {nome: 'Sofia', nota: 9},
    {nome: 'Paulo', nota: 2},
    {nome: 'Miguel', nota: 3},
    {nome: 'Lara', nota: 4},
    {nome: 'Julia', nota: 8},
    {nome: 'Lucas', nota: 3},
    {nome: 'Jean', nota: 5},
    {nome: 'laura', nota: 7},
    {nome: 'Joaquim', nota: 9},
    {nome: 'Ana', nota: 10},
    {nome: 'Vinicius', nota: 8},
];

function alunosAprovados(aunos) {
    return aunos.filter(function(auno) {
        return auno.nota >= 6
    })
};

const aprovados = alunosAprovados(alunos);

console.log(aprovados)