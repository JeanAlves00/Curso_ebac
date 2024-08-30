"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `Ola ${this.nome}`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        /*private*/ this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDaConta() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo += valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123);
contaDoPedro.depositar(500);
