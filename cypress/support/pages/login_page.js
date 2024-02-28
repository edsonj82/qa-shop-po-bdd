///<reference types="cypress" />

export default {
    loginClick() {
        cy.get('#btnLogin').click()
    },

    validateMessageError(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
    },

    fillEmail(email) {
        cy.get('#user').type(email)
    },

    fillPassword(password) {
        cy.get('#password').type(password)
    }
}