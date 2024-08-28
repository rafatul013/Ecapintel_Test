class Signin{

    clicksigninbutton(){
        cy.contains("SIGN IN").should('be.visible').click();
    }
    checkdisablesigninbutton(){
        cy.get('.button-spinner-container').should('be.disabled')  
    }
    checkenablesigninbutton(){
        cy.get('[placeholder="Email address"]').should('be.visible').should('exist').type("test@gmail.com");
        cy.get('[placeholder="Password"]').should('be.visible').should('exist').type("123456");
        cy.get('.button-spinner-container').should('be.enabled').click();
    }
    checkerrormessage(){
        cy.contains("The email address and/or password entered are incorrect.").should('be.visible');
    }
    checkerrormessageinvalidemail(){
        cy.get('[placeholder="Email address"]').should('be.visible').should('exist').type("test@gmail");
        cy.get('[placeholder="Password"]').should('be.visible').should('exist').type(" ");
        cy.contains(" Please enter a valid email address. ").should('be.visible');
    }
    loginwithvalidcredfixture() {
        cy.fixture('credentials').then((creds) => {
            // Use the loaded credentials to perform the login
            cy.get('[placeholder="Email address"]').should('be.visible').should('exist').type(creds.email);
            cy.get('[placeholder="Password"]').should('be.visible').should('exist').type(creds.password);
            cy.get('.button-spinner-container').should('be.enabled').click();
        });
    }
    loginwithvalidcredenv(){
        const email = Cypress.env('email');
        const password = Cypress.env('password');

        cy.get('[placeholder="Email address"]').should('be.visible').should('exist').type(email);
        cy.get('[placeholder="Password"]').should('be.visible').should('exist').type(password);
        cy.get('.button-spinner-container').should('be.enabled').click();
    }
    userlogout(){
        cy.wait(2000)
        cy.get('#userDropdown').should('be.visible').click();
        cy.get('.dropdown-item.dropdown-user-details').eq(2).should('be.visible').click();
    }

}
export default Signin