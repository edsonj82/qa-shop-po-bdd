///<reference types="cypress" />
import commom_page from "../support/pages/commom_page";
import login_page from "../support/pages/login_page";

import { faker } from '@faker-js/faker';

describe('login', () => {
    beforeEach('access login', () => {
        commom_page.accessLogin()
    })

    it('field blank e-mail', () => {
        login_page.loginClick()
        login_page.validateMessageError('E-mail inválido.')
    });

    it.only('field blank password', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.loginClick()
        login_page.validateMessageError('Senha inválida.')
    });

    it('field invalid password', () => {

    });

})