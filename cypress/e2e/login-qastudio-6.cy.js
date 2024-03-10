describe('Форма логина и пароля на login.qa.studio', function () {
    it('заглавные буквы в логине и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})