class Academy {
    stopredirection() {
        // Assert the redirection does not happen
        cy.go('back');
        cy.url().should('eq', 'https://qa.ecapintel.com/academy');
    }

}
export default Academy