class Footer {
    verifyEcapIntelLinks() {
        cy.get('.footer-links-title').eq(0).contains('eCapIntel').should('be.visible');
        cy.get('.footer-links-item').eq(0).find('a').should('have.attr', 'href', 'about').and('contain', 'About eCapIntel');
        cy.get('.footer-links-item').eq(1).find('a').should('have.attr', 'href', 'https://ecapintel.com/').and('contain', 'Advertising');
        cy.get('.footer-links-item').eq(2).find('a').should('have.attr', 'href', '/snf360').and('contain', 'SNF360');
    }
    verifySupportLinks() {
        cy.get('.footer-links-title').eq(1).contains('SUPPORT').should('be.visible');
        cy.get('.footer-links-item').eq(3).find('a').should('have.attr', 'href', 'javascript:void(0);').and('contain', 'Contact Us');
        cy.get('.footer-links-item').eq(4).find('a').should('have.attr', 'href', 'snf360/navigation-help').and('contain', 'Navigation');
    }
    checkNavigationLinks(){
        cy.get('.footer-links-item').eq(0).find('a').should('have.attr', 'href', 'about').click({ force: true });
        cy.url().should('include', '/about');
        cy.go('back');

        cy.get('.footer-links-item').eq(2).find('a').should('have.attr', 'href', '/snf360').click({ force: true });
        cy.wait(1000)
        cy.url().should('include', '/snf360');
        cy.go('back'); 
    }
    verifyNewsletterSubscriptionInput() {
        cy.get('.newsletter-input').should('be.visible').and('have.attr', 'placeholder', 'Your Email');
        cy.get('.btn-teal').contains('Submit').should('be.visible');
        // Optionally, you could test entering an email and clicking submit
        cy.get('.newsletter-input').type('test@example');
        cy.get('#newsletter-submit').click();
        cy.contains(" Please enter a valid email address. ").should('be.visible');
        cy.get('.newsletter-input').clear().type('test@gmail.com');
        cy.get('#newsletter-submit').click();
        cy.contains(" You have subscribed to news updates newsletter! ").should('be.visible');
    }
    verifySocialMediaLinks() {
        cy.get('.social-links-item').eq(0).find('a').should('have.attr', 'href', '').find('i').should('have.class', 'fab fa-twitter');
        cy.get('.social-links-item').eq(1).find('a').should('have.attr', 'href', 'https://www.linkedin.com/company/ecapintel/').find('i').should('have.class', 'fab fa-linkedin-in');
        cy.get('.social-links-item').eq(2).find('a').should('have.attr', 'href', 'mailto:info@ecapintel.com').find('i').should('have.class', 'fas fa-envelope');
    }
    verifyCopyrightInformation() {
        cy.get('.site-footer-copyright').should('be.visible').and('contain', '© 2023 eCapIntel & eCapAcademy');
    }
}
export default Footer