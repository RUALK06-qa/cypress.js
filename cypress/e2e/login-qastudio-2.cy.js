describe('Форма логина и пароля на login.qa.studio', function () {
    it('восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('any@mail.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
