///<reference types="cypress" />

export default {
    acessUserRegistration() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    },
    
    accessLogin() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-user').click()
    }
}