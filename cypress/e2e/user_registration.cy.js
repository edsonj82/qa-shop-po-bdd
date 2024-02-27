///<reference types="cypress" />
import commom_page from '../support/pages/commom_page'
import user_registration from '../support/pages/user_registration_page'

import { faker } from '@faker-js/faker';

describe('user registration', () => {
    beforeEach('access user registration', () => {
        commom_page.acessUserRegistration()
    })


    it('register successfully', () => {

    });

    it('field blank name', () => {
        user_registration.registrationClick()
        user_registration.validateMessageError('O campo nome deve ser prenchido')
    });

    it.only('field blank e-mail', () => {
        user_registration.fillName(faker.person.fullName())
    });

    it('field invalid name', () => {

    });

    it('field blank password', () => {

    });

    it('field invalid password', () => {

    });

})