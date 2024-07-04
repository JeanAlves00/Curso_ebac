function Animal(nome, idade) {
    if (new.target === Animal) {
        throw new Error("A classe Animal não pode ser instanciada.");
    }
    return {
        nome,
        idade,
        fazerSom: function() {
            throw new Error("A classe Animal não possui um método 'fazerSom'.");
        }
    };
}

function Cachorro(nome, idade, raca) {
    const animal = Animal(nome, idade);
    return {
        ...animal,
        raca,
        fazerSom: function() {
            console.log("Au au!");
        }
    };
}


function Gato(nome, idade, cor) {
    const animal = Animal(nome, idade);
    return {
        ...animal,
        cor,
        fazerSom: function() {
            console.log("Miau!");
        }
    };
}


const cachorro1 = Cachorro("Rex", 3, "Labrador");
const gato1 = Gato("Mingau", 2, "Branco");
const cachorro2 = Cachorro("Max", 5, "Bulldog");

console.log(cachorro1);
cachorro1.fazerSom();

console.log(gato1);
gato1.fazerSom();

console.log(cachorro2);
cachorro2.fazerSom();
