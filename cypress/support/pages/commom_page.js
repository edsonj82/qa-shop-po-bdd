///<reference types="cypress" />

export default {
    acessUserRestration() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    }
}