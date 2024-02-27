///<reference types="cypress" />
import commom_page from "../support/pages/commom_page";
import login_page from "../support/pages/login_page";


describe('login', () => {
    beforeEach('access login', () => {
        commom_page.accessLogin()
    })

    it.only('field blank e-mail', () => {
        login_page.loginClick()
        login_page.validateMessageError('E-mail inválido.')
    });

    it('field blank e-mail', () => {

    });

    it('field blank password', () => {

    });

    it('field invalid password', () => {

    });

})