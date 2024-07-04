function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log("Meu nome é " + this.nome);
    }
}

function funcionario(nome, cargo, salario)  {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log("eu sou uma " + this.cargo);
    }
    
    Pessoa.call(this, nome);
}


const funcionario1 = new funcionario('Maria', 'Desenvolvedora', 2000);
funcionario1.falar();
funcionario1.dizCargo();
