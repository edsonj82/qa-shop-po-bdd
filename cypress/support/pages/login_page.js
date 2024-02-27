///<reference types="cypress" />

export default {
    loginClick() {
        cy.get('#btnLogin').click()
    },

    validateMessageError(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
    }
}