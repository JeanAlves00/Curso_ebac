describe('Criar contatos', () => {
    it('deve criar 5 contatos na agenda', () => {
        // Visita a URL da aplicação de agenda
        cy.visit('https://agenda-contatos-react.vercel.app');
        
        // Espera a página carregar completamente
        cy.get('body').should('be.visible');
        cy.wait(1000);
        
        cy.log('Iniciando criação de 5 contatos...');
        
        // Array com os dados dos 5 contatos
        const contatos = [
            { nome: 'Contato 1', email: 'contato1@teste.com', telefone: '119123451' },
            { nome: 'Contato 2', email: 'contato2@teste.com', telefone: '119123452' },
            { nome: 'Contato 3', email: 'contato3@teste.com', telefone: '119123453' },
            { nome: 'Contato 4', email: 'contato4@teste.com', telefone: '119123454' },
            { nome: 'Contato 5', email: 'contato5@teste.com', telefone: '119123455' }
        ];
        
        // Função para adicionar cada contato
        contatos.forEach((contato, index) => {
            cy.log(`Adicionando contato ${index + 1} de 5: ${contato.nome}`);
            
            // Preenche o formulário para cada contato
            cy.get('input[type="text"]').clear().type(contato.nome);
            cy.get('input[type="email"]').clear().type(contato.email);
            cy.get('input[type="tel"]').clear().type(contato.telefone);
            
            // Clica no botão para adicionar o contato
            cy.contains('button', 'Adicionar').click();
            
            // Espera após cada adição
            cy.wait(500);
            
            // Verifica se o contato foi adicionado à lista
            cy.contains('.contato', contato.nome).should('be.visible');
        });
        
        cy.log('Criação de contatos concluída com sucesso!');
    });
});