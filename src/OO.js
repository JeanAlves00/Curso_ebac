//function Pokemon (nomeDoPokemon, tipoDoPokemon) {	
//    this.nome = nomeDoPokemon
//    this.tipo = tipoDoPokemon
//}

//const pikachu = new Pokemon('Pikachu', 'Eletrico')

class Pokemon {
    #hp = 100// atributo privado

   constructor(nomeDoPokemon, tipoDoPokemon) {
       this.nome = nomeDoPokemon;
       this.tipo = tipoDoPokemon;
   }

   atacar(nomeDoAtaque) {
       console.log(`${this.nome} usou ${nomeDoAtaque}`);
   }

   recebeuDano(dano) {
       this.#hp -= 10;
   }

   exibeHP() {
       console.log(this.#hp);
   }
}

class Pikachu extends Pokemon {

   constructor() {
       super('Pikachu', 'Eletrico');
   }
   atacar() {
    console.log(`${this.nome} usou choque do trovao`);
   }

}

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuDano();
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHP();
const pikachu = new Pokemon('Pikachu', 'Eletrico');

//pikachu.atacar('Choque do Trovao');

//pikachu.nome = 'Pikachu';
//pikachu.Tipo = 'Eletrico'

console.log(pikachu);
console.log(pikachuDoAsh);