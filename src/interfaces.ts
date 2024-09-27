class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: number) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: number) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
    
}