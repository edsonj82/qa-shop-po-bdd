///<reference types="cypress" />

export default {
    registrationClick() {
        cy.get('#btnRegister').click()
    },

    // validateMessageError() {
    //     cy.get('.errorLabel')
    //         .then((element) => {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq('O campo nome deve ser prenchido')
    //         })
    // }

    validateMessageError(message) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', message)
    },
    
    fillName(name){
        cy.get('#user').type(name)
    }
}