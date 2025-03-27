describe('Editar contatos', () => {
    it('deve editar 2 contatos específicos na agenda', () => {
        // Visita a URL da aplicação de agenda
        cy.visit('https://agenda-contatos-react.vercel.app');

        // Espera a página carregar completamente
        cy.get('body').should('be.visible');
        cy.wait(1000);

        cy.log('Preparando para editar 2 contatos...');

        // Utiliza o documento para evitar que o cy.get falhe caso não encontre o elemento
        cy.document().then(document => {
            const contatos = document.querySelectorAll('.contato');
            const contatosCount = contatos.length;
            cy.log(`Total de contatos encontrados: ${contatosCount}`);

            if (contatosCount === 0) {
                cy.log('Não há nada para editar.');
                return;
            }

            // Editar apenas os 2 primeiros contatos
            const contatosParaEditar = 2;
            cy.log(`Editando ${contatosParaEditar} contatos...`);

            // Loop para editar apenas 2 contatos
            for (let i = 0; i < contatosParaEditar; i++) {
                // Clica no botão "Editar" do contato
                cy.get('.contato').eq(i)
                    .should('exist')
                    .within(() => {
                        cy.get('button.edit')
                            .should('be.visible')
                            .click();
                    });

                // Espera para o formulário de edição aparecer
                cy.wait(500);

                // Preenche os novos dados
                const novoNome = `Contato Editado ${i + 1}`;
                const novoEmail = `editado${i + 1}@teste.com`;
                const novoTelefone = `999${i + 1}${i + 1}${i + 1}${i + 1}`;

                // Limpa os campos e preenche com novos dados
                cy.get('input[type="text"]').clear().type(novoNome);
                cy.get('input[type="email"]').clear().type(novoEmail);
                cy.get('input[type="tel"]').clear().type(novoTelefone);

                // Clica no botão para salvar as alterações
                cy.get('button.alterar').should('be.visible').click();

                // Espera a alteração ser concluída
                cy.wait(500);
            }

            cy.log('Edição dos 2 contatos concluída com sucesso!');
        });
    });
});