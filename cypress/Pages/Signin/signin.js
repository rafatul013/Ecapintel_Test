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
    loginwithvalidcred(){
        cy.get('[placeholder="Email address"]').should('be.visible').should('exist').type("test@gmail.com");
        cy.get('[placeholder="Password"]').should('be.visible').should('exist').type("123456");
        cy.get('.button-spinner-container').should('be.enabled').click();
    }

}
export default Signin