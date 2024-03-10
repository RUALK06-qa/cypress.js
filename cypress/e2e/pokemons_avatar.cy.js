describe('Покупка аватара для тренера', function () {
    it('покупка нового аватара', function () {
    cy.visit('https://pokemonbattle.me/'); // зайти на сайт битвы покемонов
    cy.get(':nth-child(1) > .auth__input').type('al0908@yandex.ru'); // ввести логин
    cy.get('#password').type('Alena09.08'); // ввести пароль
    cy.get('.auth__button').click(); // нажать кнопку Войти
    cy.get('.header__btns > [href="/shop"]').should('be.visible'); // есть кнопка Магазин
    cy.get('.header__btns > [href="/shop"]').click(); // нажать кнопку Магазин
    cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // выбор аватара для покупки
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5432543254325430'); // ввести верный номер карты
    cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25'); // ввести валидный срок действия карты
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввести корректный CVV-код
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Name Surname'); // ввести имя и фамилию
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}');  // нажать Enter
    cy.get('.payment__submit-button').should('be.disabled'); // кнопка Отправить не кликабельна
    cy.get('#cardnumber').type('56456'); // ввести корректный код подтверждения
    cy.get('#cardnumber').type('{enter}');  // нажать Enter
    cy.get('.payment__submit-button').should('be.enabled'); // кнопка Отправить кликабельна
    cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // уведомление об успешной покупке
    })
})