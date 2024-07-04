function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log("Meu nome é " + this.nome);
    }
}

//getter e setter
function funcionario(nome, cargo, salario)  {
    this.cargo = cargo;
    
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if  (typeof valor === "number") {
            _salario = ("Meu salario e de: R$" + valor);
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        console.log("Meu novo salario é de: R$" + novoSalario);
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log("Meu cargo é " + this.cargo);
    }
    
    Pessoa.call(this, nome);
}


const funcionario1 = new funcionario('Maria', 'Desenvolvedora', 5000);
funcionario1.falar();
funcionario1.dizCargo();
funcionario1.setSalario(5000);
funcionario1.aumento();


console.log(funcionario1.getSalario());
