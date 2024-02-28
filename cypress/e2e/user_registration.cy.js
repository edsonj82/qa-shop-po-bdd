///<reference types="cypress" />
import commom_page from '../support/pages/commom_page'
import user_registration from '../support/pages/user_registration_page'

import { faker } from '@faker-js/faker';

describe('user registration', () => {
    beforeEach('access user registration', () => {
        commom_page.acessUserRegistration()
    })


    it('register successfully', () => {
        const name = faker.person.fullName()

        user_registration.fillName(name)
        user_registration.fillEmail(faker.internet.email())
        user_registration.fillPassword('12345@qazando')
        user_registration.registrationClick()
        user_registration.validateMessageSuccess(name)
    });

    it('field blank name', () => {
        user_registration.registrationClick()
        user_registration.fillEmail(faker.internet.email())
        user_registration.fillPassword('12345@qazando')
        user_registration.validateMessageError('O campo nome deve ser prenchido')
    });

    it('field blank e-mail', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.registrationClick()
        user_registration.validateMessageError('O campo e-mail deve ser prenchido corretamente')
    });

    it('field invalid e-mail', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.person.firstName())
        user_registration.registrationClick()
        user_registration.validateMessageError('O campo e-mail deve ser prenchido corretamente')
    });

    it('field blank password', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.internet.email())
        user_registration.registrationClick()
        user_registration.validateMessageError('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('field invalid password', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.internet.email())
        user_registration.fillPassword('12345')
        user_registration.registrationClick()
        user_registration.validateMessageError('O campo senha deve ter pelo menos 6 dígitos')
    });

})