describe('Форма логина и пароля на login.qa.studio', function () {
    it('неправильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('ivan@dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})