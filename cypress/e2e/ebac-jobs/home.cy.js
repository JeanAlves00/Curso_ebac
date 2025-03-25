/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('deve filtrar vagas por FullStak', () => {
        cy.get('.FormVagas_campo__E1ppF').type('FullStack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)

    })
})