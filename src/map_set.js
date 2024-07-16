let meuMap = new Map();//cria um novo map

meuMap.set("nome", "gustavo");//adiciona um novo item no map
meuMap.set("sobrenome", "oliveira");//adiciona um novo item no map
meuMap.set("idade", 20);//adiciona um novo item no map
meuMap.set("stack", "html, css, js");//adiciona um novo item no map

console.log(meuMap);//mostra o map

const nome = meuMap.get("nome");//pega o valor do map

console.log(nome);//mostra o valor do map

console.log(meuMap.size)//mostra o tamanho do map

console.log(meuMap.has("nome"))//verifica se o map tem o item

//meuMap.clear()//limpa o map

console.log(meuMap.size)//limpa o map

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

meuMap.delete("stack");//deleta o item do map

console.log(meuMap);//mostra o map

const cpfs = new Set ();//cria um novo set

cpfs.add(123456789);//adiciona um novo item no set
cpfs.add(987654321);//adiciona um novo item no set
cpfs.add(123455389);//adiciona um novo item no set

console.log(cpfs);//mostra o set

const array = [1, 1, 2, 2, 3, 3]

const arrayComoSet = new Set([...array])//transforma o array em set e remove itens duplicados

const arraySemItensDubplicados = [...arrayComoSet]//transforma o set em array

console.log(arrayComoSet)