function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log("Meu nome é " + this.nome);
    }
}

function funcionario(nome, cargo, salario)  {
    this.cargo = cargo;
    
    let _salario = salario;

    this.retornaSalario = function() {
        return _salario;
    }

    this.dizCargo = function() {
        console.log("Meu cargo é " + this.cargo);
    }
    
    Pessoa.call(this, nome);
}


const funcionario1 = new funcionario('Maria', 'Desenvolvedora', 5000);
funcionario1.falar();
funcionario1.dizCargo();

console.log(funcionario1.retornaSalario());
