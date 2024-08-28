class ToolsResource {
    checkHeaderSectionheading() {
        cy.get('.ml-5.head-title').eq(0).should('have.text', ' z.Apps & Resources ').should('be.visible')
    }
    checkHeaderSectionSearch() {
        cy.get('[placeholder="Search for a tool or resource"]').type('Nursing Homes').should('have.value', 'Nursing Homes') // Validate the input value
        cy.get('button[type="submit"]').should('not.be.disabled').click();
    }
    validatesectionheaderandcontent() {
        cy.get('.bg-dark-blue-gradient').within(() => {
            cy.contains('The SNF-EMR serves as an operating system, but it should function more as an application running on a secure, standardized, open digital platform.');
            cy.contains('That said, a great deal of the data stakeholders need for underwriting is available from public sources. The problem is accessing and reconciling pertinent information.');
            //select readmore button
        });
    }
    validatereadmorebutton() {
        cy.get('.read-more-item').should('have.text', ' Read More .. ').should('be.visible').click();
        cy.contains("Skilled Nursing needs innovators and disrupters more than ever. Contact us to get started!").should('be.visible')
        cy.get('.read-more-item').should('have.text', ' Read Less ').should('be.visible').click();

    }
    validatecontactus() {
        cy.get('.read-more-item').should('have.text', ' Read More .. ').should('be.visible').click();
        cy.get('.contact-link').should('have.text', 'Contact us').should('be.visible').click();
        cy.get('.close').should('have.exist').should('be.visible').click();
    }
    //intel pro
    validateintelproexpanddefault() {
        //should intel pro feature expand by default
        cy.get('.accordion-title').eq(0).should('have.class', "accordion-title").should('be.visible').click();
    }
    validateintelproexpandcollapse() {
        //expand
        cy.get('.accordion-title').eq(0).should('have.text', ' Intel PRO ').should('be.visible').click();
        //collpase
        cy.get('.accordion-title.collapsed').eq(0).should('have.class', "accordion-title.collapsed").should('be.visible').click();
    }
    validateintelitemcount() {
        cy.get('#accordion-0 .resource-item').should('have.length', 14);
    }
    validatetotalresourcefromapi() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources")
            .then((response) => {
                expect(response.status).to.eq(200);
                const total = response.body.total
                cy.get('.resource-item').should('have.length', total); // Replace 6 with the actual number of resources you expect
            });
    }

    validateFirstFourIntelProCardResources() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources")
            .then((response) => {
                expect(response.status).to.eq(200);

                // Loop through the first four resources
                response.body.resources.slice(0, 4).forEach((resource, index) => {
                    const title = resource.title;
                    const thumbnail = resource.thumbnail;
                    const link = resource.link;

                    cy.get('.resource-title').eq(index).should('have.text', title).should('be.visible');
                    cy.get('.resource-image').eq(index).should('have.attr', 'src', thumbnail).should('be.visible');
                    cy.get('.resource-link').eq(index).should('have.attr', 'href', link).should('be.visible');

                    cy.get('.resource-link').eq(index).invoke('removeAttr', 'target').click();
                    cy.url().should('include', link);
                    cy.go('back');
                });
            });
    }

    //Intel UNDERWRITER
    validateintelunderwriterbtnexpand() {
        // cy.get('.accordion-title.collapsed').should('have.class', "accordion-title.collapsed").should('be.visible');
        cy.contains(" Intel UNDERWRITER ").should('be.visible').click();
    }
    validateintelunderwritterresourcecount() {
        cy.get('.accordion-title').eq(1).should('have.text', ' Intel UNDERWRITER ').should('be.visible').click();
        cy.get('#accordion-1 .resource-item').should('have.length', 6);
    }
    validateFirstintelunderwritterCardResources() {
        cy.contains(" Intel UNDERWRITER ").should('be.visible').click();
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources")
            .then((response) => {
                expect(response.status).to.eq(200);
                const title = response.body.resources[12].title
                const thumbnail = response.body.resources[12].thumbnail;

                cy.get('.resource-title').eq(14).should('have.text', title).should('be.visible');
                cy.get('.resource-image').eq(14).should('have.attr', 'src', thumbnail).should('be.visible');
            });
    }

    validateToolsAndResourcesHeader() {
        cy.get('.col-lg-3.right-panel').should('have.text', 'Tools & Resources').should('be.visible');
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources/featured")
            .then((response) => {
                expect(response.status).to.eq(200);
                const total = response.body.total
                cy.get('.col-lg-3.right-panel .links .link-item').should('have.length', total);
            });
    }

    ValidatefirstresourceToolsResourceslinkssection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources/featured")
            .then((response) => {
                expect(response.status).to.eq(200);
                const title = response.body.resources[0].title
                const link = response.body.resources[0].link

                cy.get('.link-item').eq(0).should('have.text', title).should('be.visible');
                cy.get('.link-item a').eq(0).should('have.attr', 'href', link).should('be.visible');

                cy.get('.link-item a').eq(0).eq(0).invoke('removeAttr', 'target').click();
                cy.url().should('include', link);
                cy.go('back');
            });
    }
    ValidatefirstIntelUnderwriterresource() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/resources/featured")
            .then((response) => {
                expect(response.status).to.eq(200);
                const title = response.body.resources[12].title
                const link = response.body.resources[12].link

                cy.get('.link-item').eq(14).should('have.text', title).should('be.visible');
                //cy.get('.link-item a').eq(14).should('have.attr', 'href', link).should('be.visible');
            });
    }

}
export default ToolsResource
