class CategoryNews{
    checkcategorynewssection() {
        cy.get('categories-news').should('be.exist');
    }
    checknumberofcontent() {
        cy.get('.categories-news-section').should('have.length', 5);
    }
    validateReimbursementSection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const categoriesnewstitle = response.body.newsCategories[0].title;
                const categoriesnewsimg = response.body.newsCategories[0].sourceMediaUrl;
                const articletittle1 = response.body.newsCategories[0].articles[0].title;
                const articleexternallink1 = response.body.newsCategories[0].articles[0].externalLink;
                const articletittle2 = response.body.newsCategories[0].articles[1].title;
                const articleexternallink2 = response.body.newsCategories[0].articles[1].externalLink;
                const articletittle3 = response.body.newsCategories[0].articles[2].title;
                const articleexternallink3 = response.body.newsCategories[0].articles[2].externalLink;
                // Check if the UI matches with the API response
                cy.get(".categories-news-title").eq(0).should('have.text', categoriesnewstitle).should('be.visible');
                cy.get(".categories-news-img").eq(0).should('have.attr', 'src', categoriesnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });

                cy.get('.categories-news-text').eq(0).should('have.text', articletittle1)
                cy.get(".title-link").eq(16).should('have.attr', 'href', articleexternallink1).should('be.exist');

                cy.get('.categories-news-text').eq(1).should('have.text', articletittle2)
                cy.get(".title-link").eq(17).should('have.attr', 'href', articleexternallink2).should('be.exist');

                cy.get('.categories-news-text').eq(2).should('have.text', articletittle3)
                cy.get(".title-link").eq(18).should('have.attr', 'href', articleexternallink3).should('be.exist');
            });
    }
    validateComplianceSection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const categoriesnewstitle = response.body.newsCategories[1].title;
                const categoriesnewsimg = response.body.newsCategories[1].sourceMediaUrl;

                const articletittle1 = response.body.newsCategories[1].articles[0].title;
                const articleexternallink1 = response.body.newsCategories[1].articles[0].externalLink;

                const articletittle2 = response.body.newsCategories[1].articles[1].title;
                const articleexternallink2 = response.body.newsCategories[1].articles[1].externalLink;

                const articletittle3 = response.body.newsCategories[1].articles[2].title;
                const articleexternallink3 = response.body.newsCategories[1].articles[2].externalLink;
                
                 // Check if the UI matches with the API response
                 cy.get(".categories-news-title").eq(1).should('have.text', categoriesnewstitle).should('be.visible');
                 cy.get(".categories-news-img").eq(1).should('have.attr', 'src', categoriesnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
 
                 cy.get('.categories-news-text').eq(3).should('have.text', articletittle1)
                 cy.get(".title-link").eq(19).should('have.attr', 'href', articleexternallink1).should('be.exist');
 
                 cy.get('.categories-news-text').eq(4).should('have.text', articletittle2)
                 cy.get(".title-link").eq(20).should('have.attr', 'href', articleexternallink2).should('be.exist');
 
                 cy.get('.categories-news-text').eq(5).should('have.text', articletittle3)
                 cy.get(".title-link").eq(21).should('have.attr', 'href', articleexternallink3).should('be.exist');
            });
    }
    validateLegislationSection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const categoriesnewstitle = response.body.newsCategories[2].title;
                const categoriesnewsimg = response.body.newsCategories[2].sourceMediaUrl;

                const articletittle1 = response.body.newsCategories[2].articles[0].title;
                const articleexternallink1 = response.body.newsCategories[2].articles[0].externalLink;

                const articletittle2 = response.body.newsCategories[2].articles[1].title;
                const articleexternallink2 = response.body.newsCategories[2].articles[1].externalLink;

                const articletittle3 = response.body.newsCategories[2].articles[2].title;
                const articleexternallink3 = response.body.newsCategories[2].articles[2].externalLink;
                
                 // Check if the UI matches with the API response
                 cy.get(".categories-news-title").eq(2).should('have.text', categoriesnewstitle).should('be.visible');
                 cy.get(".categories-news-img").eq(2).should('have.attr', 'src', categoriesnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
 
                 cy.get('.categories-news-text').eq(6).should('have.text', articletittle1)
                 cy.get(".title-link").eq(22).should('have.attr', 'href', articleexternallink1).should('be.exist');
 
                 cy.get('.categories-news-text').eq(7).should('have.text', articletittle2)
                 cy.get(".title-link").eq(23).should('have.attr', 'href', articleexternallink2).should('be.exist');
 
                 cy.get('.categories-news-text').eq(8).should('have.text', articletittle3)
                 cy.get(".title-link").eq(24).should('have.attr', 'href', articleexternallink3).should('be.exist');
            });
    }
    validateFinanceSection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const categoriesnewstitle = response.body.newsCategories[3].title;
                const categoriesnewsimg = response.body.newsCategories[3].sourceMediaUrl;

                const articletittle1 = response.body.newsCategories[3].articles[0].title;
                const articleexternallink1 = response.body.newsCategories[3].articles[0].externalLink;

                const articletittle2 = response.body.newsCategories[3].articles[1].title;
                const articleexternallink2 = response.body.newsCategories[3].articles[1].externalLink;

                const articletittle3 = response.body.newsCategories[3].articles[2].title;
                const articleexternallink3 = response.body.newsCategories[3].articles[2].externalLink;
                
                 // Check if the UI matches with the API response
                 cy.get(".categories-news-title").eq(3).should('have.text', categoriesnewstitle).should('be.visible');
                 cy.get(".categories-news-img").eq(3).should('have.attr', 'src', categoriesnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
 
                 cy.get('.categories-news-text').eq(9).should('have.text', articletittle1)
                 cy.get(".title-link").eq(25).should('have.attr', 'href', articleexternallink1).should('be.exist');
 
                 cy.get('.categories-news-text').eq(10).should('have.text', articletittle2)
                 cy.get(".title-link").eq(26).should('have.attr', 'href', articleexternallink2).should('be.exist');
 
                 cy.get('.categories-news-text').eq(11).should('have.text', articletittle3)
                 cy.get(".title-link").eq(27).should('have.attr', 'href', articleexternallink3).should('be.exist');
            });
    }
    validateFraudSection() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const categoriesnewstitle = response.body.newsCategories[4].title;
                const categoriesnewsimg = response.body.newsCategories[4].sourceMediaUrl;

                const articletittle1 = response.body.newsCategories[4].articles[0].title;
                const articleexternallink1 = response.body.newsCategories[4].articles[0].externalLink;

                const articletittle2 = response.body.newsCategories[4].articles[1].title;
                const articleexternallink2 = response.body.newsCategories[4].articles[1].externalLink;

                const articletittle3 = response.body.newsCategories[4].articles[2].title;
                const articleexternallink3 = response.body.newsCategories[4].articles[2].externalLink;
                
                 // Check if the UI matches with the API response
                 cy.get(".categories-news-title").eq(4).should('have.text', categoriesnewstitle).should('be.visible');
                 cy.get(".categories-news-img").eq(4).should('have.attr', 'src', categoriesnewsimg).should('be.exist').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
 
                 cy.get('.categories-news-text').eq(12).should('have.text', articletittle1)
                 cy.get(".title-link").eq(28).should('have.attr', 'href', articleexternallink1).should('be.exist');
 
                 cy.get('.categories-news-text').eq(13).should('have.text', articletittle2)
                 cy.get(".title-link").eq(29).should('have.attr', 'href', articleexternallink2).should('be.exist');
 
                 cy.get('.categories-news-text').eq(14).should('have.text', articletittle3)
                 cy.get(".title-link").eq(30).should('have.attr', 'href', articleexternallink3).should('be.exist');
            });
    }

}
export default CategoryNews