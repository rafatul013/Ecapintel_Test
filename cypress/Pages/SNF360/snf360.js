class Snf {

    verifySectionheader() {
        cy.get('.section-header').eq(0).should('have.text', 'SNF360').should('be.visible');
    }
    verifySubheader() {
        cy.get('.sub-header').should('have.text', ' HHS establishes broad, national standards for “Skilled Nursing Facility” certification, but the notion of a “National Industry” is a fallacy – highly variable state policies dictate most aspects of SNF payment and operations. Further, the uneven impact of diffuse national and state healthcare legislation splinters the provider-class into county clusters that distort all manner of reporting and asset value. SNF performance cannot be measured without adjusting for conditions within its local market – this is where “comparative integrity” disappears.  SNF360 offers the most comprehensive compilation of public & proprietary SNF-related data – the difference is context. We adjust for hundreds of variables that define a provider’s comparable position & potential; we then offer the insight and rational perspective required for responsible underwriting. ').should('be.visible');
    }
    verifyheroimage() {
        const heroimage1 = 'assets/images/snf360/new-snf360-hero.jpg'
        cy.get('.hero-image').should('have.css', 'background-image').and('include', heroimage1);
        cy.get('.hero-image').should('be.visible');
    }
    veifyCurrentMarketAssessment() {
        cy.get('.flip-card-front .tile-image').eq(0).should('have.attr', 'src', '../assets/images/icons/new/current-market.svg');
        cy.get('.flip-card-front .card-title').eq(0).should('contain.text', 'Current Market Assessment');
        //flip Card
        cy.get('.flip-card-inner').eq(0).invoke('css', 'transform', 'rotateY(180deg)');
        //Assert Content
        cy.get('.flip-card-back .info').eq(0).should('contain.text', 'State-by-State compound rating-based INTEL’s Market Assessment');
        cy.get('.flip-card-back .card-link').eq(0).should('contain.text', 'Current Market Assessment');
        //Verify Navigation Link
        cy.get('.flip-card-back .card-link').eq(0).click({ force: true });
        cy.url().should('include', '/snf360/national?type=current');
        cy.go('back');
    }
    verifyTrendAssessment() {
        cy.get('.flip-card-front .tile-image').eq(1).should('have.attr', 'src', '../assets/images/icons/new/outlook-market.svg');
        cy.get('.flip-card-front .card-title').eq(1).should('contain.text', 'Trend Assessment');

        cy.get('.flip-card-inner').eq(1).invoke('css', 'transform', 'rotateY(180deg)');

        cy.get('.flip-card-back .info').eq(1).should('contain.text', 'Impact assessment of regulatory & market trends expected in the “foreseeable future”');
        cy.get('.flip-card-back .card-link').eq(1).should('contain.text', 'Trend Assessment');

        cy.get('.flip-card-back .card-link').eq(1).click({ force: true });
        cy.url().should('include', '/snf360/national?type=outlook');
        cy.go('back');
    }
    verifyProviderInsights() {
        cy.get('.flip-card-front .tile-image').eq(2).should('have.attr', 'src', '../assets/images/icons/new/provider-insights.svg');
        cy.get('.flip-card-front .card-title').eq(2).should('contain.text', 'Provider Insights');

        cy.get('.flip-card-inner').eq(2).invoke('css', 'transform', 'rotateY(180deg)');

        cy.get('.flip-card-back .info').eq(2).should('contain.text', 'Facility-specific performance is adjusted to allow apples-apples comparisons');
        cy.get('.flip-card-back .card-link').eq(2).should('contain.text', 'Provider Insights');

        cy.get('.flip-card-back .card-link').eq(2).click({ force: true });
        cy.url().should('include', '/snf360/national?type=provider');
        cy.go('back');
    }
    verifyNationalMarketStatistics() {
        cy.get('.flip-card-front .tile-image').eq(3).should('have.attr', 'src', '../assets/images/icons/new/national-market.svg');
        cy.get('.flip-card-front .card-title').eq(3).should('contain.text', 'National Market Statistics & Trends');

        cy.get('.flip-card-inner').eq(3).invoke('css', 'transform', 'rotateY(180deg)');

        cy.get('.flip-card-back .info').should('contain.text', 'Relevant facts and stats about the market');
        cy.get('.flip-card-back .card-link').should('contain.text', 'National Market Statistics & Trends');

        cy.get('.flip-card-back .card-link').eq(3).click({ force: true });
        cy.url().should('include', '/snf360/statistics');
        cy.go('back');

    }
}
export default Snf