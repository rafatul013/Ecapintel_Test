class LatestNews {
    checklatestnewstitle() {
        cy.get('.news-latest-title').should('be.visible').and('have.text', 'Latest News').should('be.exist');
    }
    checknumberofarticle() {
        cy.get('.news-latest-section').should('have.length', 2);
    }
    checklatestnews1() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                // Ensure the response status is 200
                expect(response.status).to.eq(200);
                // Extract the headline news from the response
                const latestNews = response.body.latestNews[0].title;
                const latestimage = response.body.latestNews[0].sourceMediaUrl;
                const latestdescription = response.body.latestNews[0].description.trim();
                const latestexternalLink = response.body.latestNews[0].sourceMediaUrl;
                // Check if the first headline in the UI matches the first headline from the API response
                cy.get(".news-latest-section-title").eq(0).should('have.text', latestNews).should('be.visible');
                cy.get(".news-latest-section-image").eq(0).should('have.attr', 'src', latestimage).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-latest-section-image').eq(0).should('have.attr', 'src', latestexternalLink)
                cy.get(".news-latest-section-text").eq(0).invoke('text').then((text) => { expect(text.trim()).to.eq(latestdescription); })
            });
    }

    checklatestnews2() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                // Ensure the response status is 200
                expect(response.status).to.eq(200);
                // Extract the headline news from the response
                const latestNews = response.body.latestNews[1].title;
                const latestimage = response.body.latestNews[1].sourceMediaUrl;
                const latestdescription = response.body.latestNews[1].description.trim();
                const latestexternalLink = response.body.latestNews[1].sourceMediaUrl;
                // Check if the first headline in the UI matches the first headline from the API response
                cy.get(".news-latest-section-title").eq(1).should('have.text', latestNews).should('be.visible');
                cy.get(".news-latest-section-image").eq(1).should('have.attr', 'src', latestimage).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-latest-section-image').eq(1).should('have.attr', 'src', latestexternalLink)
                cy.get(".news-latest-section-text").eq(1).invoke('text').then((text) => { expect(text.trim()).to.eq(latestdescription); })
            });
    }
    checklatestnews3() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const latestNews = response.body.latestNews[2].title;
                const latestimage = response.body.latestNews[2].sourceMediaUrl;
                const latestdescription = response.body.latestNews[2].description.trim();
                const latestexternalLink = response.body.latestNews[2].sourceMediaUrl;
                cy.get(".news-latest-list-title").eq(0).should('have.text', latestNews).should('be.visible');
                cy.get(".news-latest-list-img").eq(0).should('have.attr', 'src', latestimage).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-latest-list-img').eq(0).should('have.attr', 'src', latestexternalLink)
                cy.get(".news-latest-list-text").eq(0).invoke('text').then((text) => { expect(text.trim()).to.eq(latestdescription); })
            });
    }
    checklatestnews4() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const latestNews = response.body.latestNews[3].title;
                const latestimage = response.body.latestNews[3].sourceMediaUrl;
                const latestdescription = response.body.latestNews[3].description.trim();
                const latestexternalLink = response.body.latestNews[3].sourceMediaUrl;
                cy.get(".news-latest-list-title").eq(1).should('have.text', latestNews).should('be.visible');
                cy.get(".news-latest-list-img").eq(1).should('have.attr', 'src', latestimage).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-latest-list-img').eq(1).should('have.attr', 'src', latestexternalLink)
                cy.get(".news-latest-list-text").eq(1).invoke('text').then((text) => { expect(text.trim()).to.eq(latestdescription); })
            });
    }
}
export default LatestNews