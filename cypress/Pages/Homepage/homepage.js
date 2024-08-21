class Homepage {

    checkHeroSectionContent() {
        cy.get('.section-header').eq(0).should('have.text', 'Next-Generation Analytics & Insight for Skilled Nursing Stakeholders').should('be.visible')
        cy.contains("Skilled Nursing Facilities may share a common CMS certification, but state regulations & local market conditions differ so severely that financial & clinical outcomes cannot be modeled in the context of a “national industry.”").should('be.visible');
        cy.contains("eCapIntel distills the wide array of complex variables that define SNF position, opportunity & value. Our goal is to neutralize these imbalances to improve reporting standards & mitigate risk for all SNF stakeholders.").should('be.visible');

        const heroimage = 'assets/images/home/new-hero.jpg'
        cy.get('.hero-image').should('have.css', 'background-image').and('include', heroimage);

        cy.get('.hero-text').should('have.text', 'Numbers are not data. Context matters.').should('be.visible');
    }

    verifyFlipCardVisibilityAndContent() {

        cy.get('.tile-image').eq(0).should('have.attr', 'src', '../assets/images/icons/bar-chart.svg').should('be.visible')
        cy.get('.title').eq(0).should('have.text', 'SNF360').should('be.visible');

        cy.get('.tile-image').eq(1).should('have.attr', 'src', '../assets/images/icons/service.svg').should('be.visible')
        cy.get('.title').eq(1).should('have.text', 'Tools & Resources').should('be.visible');

        cy.get('.tile-image').eq(2).should('have.attr', 'src', '../assets/images/icons/play-button.svg').should('be.visible')
        cy.get('.title').eq(2).should('have.text', 'ECAP Academy').should('be.visible');

        cy.get('.tile-image').eq(3).should('have.attr', 'src', '../assets/images/icons/people.svg').should('be.visible')
        cy.get('.title').eq(3).should('have.text', 'Community').should('be.visible');

        cy.get('.tile-image').eq(4).should('have.attr', 'src', '../assets/images/icons/news.svg').should('be.visible')
        cy.get('.title').eq(4).should('have.text', 'News').should('be.visible');
    }
    validateFlipCardBackContent() {
        cy.get('.flip-card').eq(0).trigger('mouseover');
        cy.get('.flip-card-back .info').eq(0).should('have.text', 'Next Generation Analytics for Post-Acute Care StakeholdersSNF360 >>');
        cy.get('.flip-card').eq(1).trigger('mouseover');
        cy.get('.flip-card-back .info').eq(1).should('have.text', 'Advanced modeling applications that provide a competitive advantageTools & Resources >>');
        cy.get('.flip-card').eq(2).trigger('mouseover');
        cy.get('.flip-card-back .info').eq(2).should('have.text', 'Micro-education focused on the PAC marketECAP Academy >>');
        cy.get('.flip-card').eq(3).trigger('mouseover');
        cy.get('.flip-card-back .info').eq(3).should('have.text', 'The industry voice for policy discussionCommunity >>');
        cy.get('.flip-card').eq(4).trigger('mouseover');
        cy.get('.flip-card-back .info').eq(4).should('have.text', 'Stories & Features curated by StateNews >>');
    }
    checkFlipCardNavigationLinks() {

        cy.get('.flip-card').eq(0).trigger('mouseover');
        cy.get('.flip-card-back .card-link a').eq(0).should('have.attr', 'href', '/snf360').click({ force: true });
        cy.url().should('include', '/snf360');
        cy.go('back');

        cy.get('.flip-card').eq(1).trigger('mouseover');
        cy.get('.flip-card-back .card-link a').eq(1).should('have.attr', 'href', '/resources').click({ force: true });
        cy.url().should('include', '/resources');
        cy.go('back');

        cy.get('.flip-card').eq(2).trigger('mouseover');
        cy.get('.flip-card-back .card-link a').eq(2).should('have.attr', 'href', '/academy').click({ force: true });
        cy.visit('https://qa.ecapintel.com')

        // cy.url().should('include', '/academy');
        // cy.go('back');

        cy.get('.flip-card').eq(3).trigger('mouseover');
        cy.get('.flip-card-back .card-link a').eq(3).should('have.attr', 'href', '/community').click({ force: true });
        cy.url().should('include', '/community');
        cy.go('back');

        cy.get('.flip-card').eq(4).trigger('mouseover');
        cy.get('.flip-card-back .card-link a').eq(4).should('have.attr', 'href', '/news').click({ force: true });
        cy.url().should('include', '/news');
        cy.go('back');
    }
    verifyWhoWeSupportSectionContent() {
        cy.get('.support-title').should('have.text', 'Who we support').should('be.visible');
    }

    verifyOperatorsSectionContent() {
        cy.get(':nth-child(1) > .box > .mb-3').should('have.text', 'Operators').should('be.visible');
        cy.get('.support-item').eq(0).should('contain.text', 'Performance Monitoring');
        cy.get('.support-item').eq(1).should('contain.text', 'Hospital Referral Patterns');
        cy.get('.support-item').eq(2).should('contain.text', 'Competitor Analysis');
        cy.get('.support-item').eq(3).should('contain.text', 'Community Resources');
    }
    verifyInvestorsSectionContent() {
        cy.get(':nth-child(2) > .box > .mb-3').should('have.text', 'Investors').should('be.visible');
        cy.get('.support-item').eq(4).should('contain.text', 'Opportunity Indexing');
        cy.get('.support-item').eq(5).should('contain.text', 'Industry Perspective');
        cy.get('.support-item').eq(6).should('contain.text', 'Enterprise Monitoring');
        cy.get('.support-item').eq(7).should('contain.text', 'Contextualized Data');
    }
    verifyLendersAndAdvisorsSectionContent() {
        cy.get(':nth-child(3) > .box > .mb-3').should('have.text', 'Lenders & Advisors').should('be.visible');
        cy.get('.support-item').eq(8).should('contain.text', 'Local Market Forecasting');
        cy.get('.support-item').eq(9).should('contain.text', 'Consolidation & Integration Trends');
        cy.get('.support-item').eq(10).should('contain.text', 'Risk Assessment');
        cy.get('.support-item').eq(11).should('contain.text', 'Rationalized Projections');
    }
    verifyProfessionalServicesSectionContent() {
        cy.get(':nth-child(4) > .box > .mb-3').should('have.text', 'Professional Services').should('be.visible');
        cy.get('.support-item').eq(12).should('contain.text', 'Financial Modeling');
        cy.get('.support-item').eq(13).should('contain.text', 'Litigation Support');
        cy.get('.support-item').eq(14).should('contain.text', 'Strategic Planning');
        cy.get('.support-item').eq(15).should('contain.text', 'Regulatory Resources');
    }
    verifyIndustryVendorsSectionContent() {
        cy.get(':nth-child(5) > .box > .mb-3').should('have.text', 'Industry Vendors').should('be.visible');
        cy.get('.support-item').eq(16).should('contain.text', 'Targeted Sales Tools');
        cy.get('.support-item').eq(17).should('contain.text', 'Outsourcing Trends');
        cy.get('.support-item').eq(18).should('contain.text', 'Provider-Spend Benchmarks');
        cy.get('.support-item').eq(19).should('contain.text', 'Comparative Performance');
    }
    verifyNationalStakeholdersSectionContent() {
        cy.get(':nth-child(6) > .box > .mb-3').should('have.text', 'National Stakeholders').should('be.visible');
        cy.get('.support-item').eq(20).should('contain.text', 'Healthcare Reform Initiatives');
        cy.get('.support-item').eq(21).should('contain.text', 'Regulatory Alignment');
        cy.get('.support-item').eq(22).should('contain.text', 'Custom Data Reports');
        cy.get('.support-item').eq(23).should('contain.text', 'Academic Research Tools');
    }

}
export default Homepage