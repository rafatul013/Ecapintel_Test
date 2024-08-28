class headlineNews {

  checkkheadlinenessection() {
    cy.get('headline-news').should('exist');
  }
  checknumberofarticle() {
    cy.get('.news-card').should('have.length', 4);
  }

  checksearchbox() {
    cy.get('input[formcontrolname="search"]').type('Nursing Homes').should('have.value', 'Nursing Homes'); // Validate the input value
    cy.get('button.search-btn').should('be.exist').click();
  }
  checksearchwithoutinput() {
    cy.get('input[formcontrolname="search"]').type('vvvvvvvvvvvvvvv');
    cy.get('button.search-btn').should('be.exist').click();
    cy.contains("No Search Results Found").should('be.visible');
  }
  checkfilter() {
    //check available filter
    cy.get('select.filter-btn').find('option').should('have.length', 51)

    // Verify the dropdown includes specific states
    cy.get('select.filter-btn')
      .should('contain', 'All States')
      .and('contain', 'California')
      .and('contain', 'New York')
      .and('contain', 'Texas')
      .and('contain', 'Florida');

    // Select a state from the dropdown
    cy.get('select.filter-btn').select('California'); // Selecting 'California'

    // Validate that the correct state is selected
    cy.get('select.filter-btn').should('have.value', '5: Object');
  }

  checkdefaultstate(){
    cy.get('select.filter-btn').should('have.value', '0: Object');
  }
  checkfilterwithapiresponse() {
    cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/states")
    .then((response) => {
      expect(response.status).to.eq(200);
      const state5 = response.body[4].name;
      cy.get('select.filter-btn').select(state5); // Selecting 'California'
     // cy.get('select.filter-btn').should('have.value', '5: Object');
    });
  }
  
  checkheadlinenews1() {
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

  checkheadlinenews2() {
    cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
      .then((response) => {
        expect(response.status).to.eq(200);
        const headlineNews = response.body.headlineNews[1].title;
        const headlineimage = response.body.headlineNews[1].sourceMediaUrl;
        cy.get(".news-headline-text").eq(1).should('have.text', headlineNews).should('be.visible');
        cy.get(".news-headline-img").eq(1).should('have.attr', 'src', headlineimage).should('be.visible');
      });
  }
  checkheadlinenews3() {
    cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
      .then((response) => {
        expect(response.status).to.eq(200);
        const headlineNews = response.body.headlineNews[2].title;
        const headlineimage = response.body.headlineNews[2].sourceMediaUrl;
        cy.get(".news-headline-text").eq(2).should('have.text', headlineNews).should('be.visible');
        cy.get(".news-headline-img").eq(2).should('have.attr', 'src', headlineimage).should('be.visible').should('be.exist');
      });
  }
  checkheadlinenews4() {
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