///<reference types="cypress"/>

describe ('Test_Navbar_buttons', () => {
    it('PressHomeButton', () => {
        cy.visit('/')
        cy.get('[data-cy=HomeButton').click()
        cy.location('pathname').should('equals', '/individuell_cv/')
    });
})