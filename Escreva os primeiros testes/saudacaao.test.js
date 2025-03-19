const saudacao = require('./saudacao')

describe('Testes para a saudação', () => {
    test ('Deverá retornar "Olá, Maria"', () => {
        const minhaSaudacao = saudacao('Maria');
        expect(minhaSaudacao).toBe('Olá, Maria');
    });
});