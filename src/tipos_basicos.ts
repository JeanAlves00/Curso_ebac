let estaChovendo: boolean = false //tipo boolean true ou false
estaChovendo = true

let idade: number = 27

let altura: number = 1.75 

const nacionalidade: string = 'brasileira' 

const colegas: string[] = ['lucas', 'fernanda', ] //nao pode ter tipo number apenas stringas
const tecnologias: Array<string> = ['htnl', 'css', 'js']
const notas: ReadonlyArray<number> = [7, 9, 6, 45] // readonlyArray deixa ele imutavel

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

let idadeDaAna: number | string = 25
idadeDaAna: '25 anos'

let dadosDaApi: any; //aceita qualquer valor, deve ser pouco usado
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1, 2, 3]
dadosDaApi = 'string'
