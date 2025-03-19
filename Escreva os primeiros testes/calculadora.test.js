const calc = require('./calculadora');

describe('Testes para a calculadora', () => {
    test('somar 1 + 2 é igual a 3', () => {
        const minhaSoma = calc.soma(1, 2);
        expect(minhaSoma).toBe(3);
    });

    test('mutiplicar 2 * 2 é igual a 4', () => {
        const minhaMultiplicacao = calc.multiplicacao(2, 2);
        expect(minhaMultiplicacao).toBeGreaterThan(3);
    });

});
