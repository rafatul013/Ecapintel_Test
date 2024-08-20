class headlineNews{

    checkheadlinenews1(){
    // Make an API call to fetch the headline news data
    cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
    .then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);
      // Extract the headline news from the response
      const headlineNews = response.body.headlineNews[0].title;
      const headlineimage = response.body.headlineNews[0].sourceMediaUrl;
      // Check if the first headline in the UI matches the first headline from the API response
      cy.get(".news-headline-text").eq(0).should('have.text', headlineNews).should('be.visible');
      cy.get(".news-headline-img").eq(0).should('have.attr', 'src', headlineimage).should('be.visible');
    });
    }

    checkheadlinenews2(){
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
        .then((response) => {
          expect(response.status).to.eq(200);
          const headlineNews = response.body.headlineNews[1].title;
          const headlineimage = response.body.headlineNews[1].sourceMediaUrl;
          cy.get(".news-headline-text").eq(1).should('have.text', headlineNews).should('be.visible');
          cy.get(".news-headline-img").eq(1).should('have.attr', 'src', headlineimage).should('be.visible');
          
        });
     }
     checkheadlinenews3(){
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
        .then((response) => {
          expect(response.status).to.eq(200);
          const headlineNews = response.body.headlineNews[2].title;
          const headlineimage = response.body.headlineNews[2].sourceMediaUrl;
          cy.get(".news-headline-text").eq(2).should('have.text', headlineNews).should('be.visible');
          cy.get(".news-headline-img").eq(2).should('have.attr', 'src', headlineimage).should('be.visible').should('be.exist');
        });
     }
     checkheadlinenews4(){
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
        .then((response) => {
          expect(response.status).to.eq(200);
          const headlineNews = response.body.headlineNews[3].title;
          const headlineimage = response.body.headlineNews[3].sourceMediaUrl;
          cy.get(".news-headline-text").eq(3).should('have.text', headlineNews).should('be.visible');
          cy.get(".news-headline-img").eq(3).should('have.attr', 'src', headlineimage).should('be.visible')
          .and(($img) => {
            // Check if the image loaded successfully
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
        });
     }

}
export default headlineNews