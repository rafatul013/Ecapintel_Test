class Header {
    headerlogo() {
        const brandlogosrc = 'assets/header/ecap-logo-black.png'
        cy.get('.brand-img').should('have.attr', 'src', brandlogosrc).should('be.visible')
    }
    checknavigationmenu() {
        cy.get('.nav-item').eq(0).should('have.text', 'SNF360').should('be.visible');
        cy.get('.nav-item').eq(1).should('have.text', 'TOOLS & RESOURCES').should('be.visible');
        cy.get('.nav-item').eq(2).should('have.text', 'ECAP ACADEMY').should('be.visible');
        cy.get('.nav-item').eq(3).should('have.text', 'NEWS').should('be.visible');
        cy.get('#navbarDropdown').should('have.text', ' EXPLORE ').should('be.visible');
        cy.get('#navbarDropdown1').should('have.text', ' SUPPORT ').should('be.visible');
        cy.get('.nav-item').eq(6).should('have.text', 'ABOUT').should('be.visible');
        cy.contains("SIGN IN").should('be.visible');
        cy.contains("Sign Up").should('have.text', 'Sign Up').should('be.visible');
    }
    checknavigationdropdownexplore() {
        cy.get('.dropdown-toggle-item.dropdown-menu').eq(0).click({ force: true });
        cy.get('.dropdown-item.dropdown-explore').eq(0).should('have.text', 'EVENTS').should('be.visible');
        cy.get('.dropdown-item.dropdown-explore').eq(1).should('have.text', 'COMMUNITY').should('be.visible');
        cy.get('.dropdown-item.dropdown-explore').eq(2).should('have.text', 'ADVERTISING').should('be.visible');

        // cy.get('.dropdown-toggle-item.dropdown-menu').eq(0).trigger('mouseover');
        // cy.xpath('//*[@id="navbarSupportedContent"]/ul/li[5]/div') .invoke('show', { force: true });
    }
    checknavigationdropdownsupport() {
        cy.get('.dropdown-toggle-item.dropdown-menu').eq(1).click({ force: true });
        cy.get('.dropdown-item.dropdown-explore').eq(3).should('have.text', 'CONTACT US').should('be.visible');
        cy.get('.dropdown-item.dropdown-explore').eq(4).should('have.text', 'NAVIGATION').should('be.visible'); 

    }

}
export default Header



