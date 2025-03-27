describe('Apagar contatos', () => {
    it('deve verificar se há contatos e apagá-los todos', () => {
        // Visita a URL da aplicação de agenda
        cy.visit('https://agenda-contatos-react.vercel.app');
        
        // Espera a página carregar completamente
        cy.get('body').should('be.visible');
        cy.wait(1000); // Espera adicional
        
        cy.log('Verificando contatos na página...');
        
        // Verifica se existem contatos antes de iniciar o processo
        cy.get('body').then($body => {
            const contatosCount = $body.find('.contato').length;
            cy.log(`Total de contatos encontrados: ${contatosCount}`);
            
            if (contatosCount > 0) {
                cy.log(`Encontrados ${contatosCount} contatos. Iniciando exclusão...`);
                
                // Função para excluir contatos (não recursiva)
                for (let i = 0; i < contatosCount; i++) {
                    cy.get('.contato').first()
                        .should('exist')
                        .within(() => {
                            cy.get('button.delete')
                                .should('be.visible')
                                .click();
                        });
                    
                    // Espera para a animação concluir
                    cy.wait(500);
                }
                
                // Verificação final com timeout reduzido
                cy.get('.contato', { timeout: 2000 }).should('not.exist')
                    .then(() => {
                        cy.log('Todos os contatos foram apagados com sucesso!');
                    });
            } else {
                cy.log('Nenhum contato encontrado para apagar.');
            }
        });
    });
});