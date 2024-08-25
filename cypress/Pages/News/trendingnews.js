class TrendingNews{
    checkapptrendingnewssection() {
        cy.get('app-trending-news').should('be.exist');
    }
    checkapptrendingnewstitle() {
        cy.get('.news-trending-title').should('have.text', 'Commentary').should('be.exist');
    }
    checkviewallbutton(){
        cy.get(".view-all-link").should('be.visible').click();
        cy.go('back');
    }
    checknumberofcontent() {
        cy.get('.news-trending-container').find('.news-trending-card').should('have.length', 3);
    }
    
    checktrendingnews1() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                // Ensure the response status is 200
                expect(response.status).to.eq(200);
                // Extract the headline news from the response
                const trendingnewstitle = response.body.trendingNews[0].title;
                const trendingnewsimg = response.body.trendingNews[0].sourceMediaUrl;
                const trendingnewslink = response.body.trendingNews[0].externalLink;
                // Check if the first headline in the UI matches the first headline from the API response
                cy.get(".news-trending-card-title").eq(0).should('have.text', trendingnewstitle).should('be.visible');
                cy.get(".news-trending-img").eq(0).should('have.attr', 'src', trendingnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-trending-link.title-link.custom-col').eq(0).find('a').should('have.attr', 'href', trendingnewslink)
            });
    }
    checktrendingnews2() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                // Ensure the response status is 200
                expect(response.status).to.eq(200);
                // Extract the headline news from the response
                const trendingnewstitle = response.body.trendingNews[1].title;
                const trendingnewsimg = response.body.trendingNews[1].sourceMediaUrl;
                const trendingnewslink = response.body.trendingNews[1].externalLink;

                // Check if the first headline in the UI matches the first headline from the API response
                cy.get(".news-trending-card-title").eq(1).should('have.text', trendingnewstitle).should('be.visible');
                cy.get(".news-trending-img").eq(1).should('have.attr', 'src', trendingnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-trending-link.title-link.custom-col').eq(1).find('a').should('have.attr', 'href', trendingnewslink)
            });
    }
    checktrendingnews3() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                // Ensure the response status is 200
                expect(response.status).to.eq(200);
                // Extract the headline news from the response
                const trendingnewstitle = response.body.trendingNews[2].title;
                const trendingnewsimg = response.body.trendingNews[2].sourceMediaUrl;
                const trendingnewslink = response.body.trendingNews[2].externalLink;

                // Check if the first headline in the UI matches the first headline from the API response
                cy.get(".news-trending-card-title").eq(2).should('have.text', trendingnewstitle).should('be.visible');
                cy.get(".news-trending-img").eq(2).should('have.attr', 'src', trendingnewsimg).should('be.visible').and(($img) => {
                    // Check if the image loaded successfully
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                  });
                cy.get('.news-trending-link.title-link.custom-col').eq(2).find('a').should('have.attr', 'href', trendingnewslink)
            });
    }

    checkrecommendedNewssection() {
        cy.get('app-recommended-news').should('be.exist');
    }
    checkrecommendednewstitle() {
        cy.get('.news-recommended-title').should('have.text', 'From The Industry Trades').should('be.exist');
    }
    checkrecommendednews1() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const recommendednewstitle = response.body.recommendedNews[0].title;
                const recommendednewslink = response.body.recommendedNews[0].externalLink;
                cy.get(".news-recommended-card-title").eq(0).should('have.text', recommendednewstitle).should('be.visible');
                cy.get('.news-recommended-link.title-link.custom-col').eq(0).find('a').should('have.attr', 'href', recommendednewslink)
            });
    }
    checkrecommendednews2() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const recommendednewstitle = response.body.recommendedNews[1].title;
                const recommendednewslink = response.body.recommendedNews[1].externalLink;
                cy.get(".news-recommended-card-title").eq(1).should('have.text', recommendednewstitle).should('be.visible');
                cy.get('.news-recommended-link.title-link.custom-col').eq(1).find('a').should('have.attr', 'href', recommendednewslink)
            });
    }
    checkrecommendednews3() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const recommendednewstitle = response.body.recommendedNews[2].title;
                const recommendednewslink = response.body.recommendedNews[2].externalLink;
                cy.get(".news-recommended-card-title").eq(2).should('have.text', recommendednewstitle).should('be.visible');
                cy.get('.news-recommended-link.title-link.custom-col').eq(2).find('a').should('have.attr', 'href', recommendednewslink)
            });
    }
    checkrecommendednews4() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const recommendednewstitle = response.body.recommendedNews[3].title;
                const recommendednewslink = response.body.recommendedNews[3].externalLink;
                cy.get(".news-recommended-card-title").eq(3).should('have.text', recommendednewstitle).should('be.visible');
                cy.get('.news-recommended-link.title-link.custom-col').eq(3).find('a').should('have.attr', 'href', recommendednewslink)
            });
    }
    checkrecommendednews5() {
        cy.request("https://beemumqa1a.execute-api.us-east-1.amazonaws.com/Prod/api/News/news?search=&filter=all&page=1")
            .then((response) => {
                expect(response.status).to.eq(200);
                const recommendednewstitle = response.body.recommendedNews[4].title;
                const recommendednewslink = response.body.recommendedNews[4].externalLink;
                cy.get(".news-recommended-card-title").eq(4).should('have.text', recommendednewstitle).should('be.visible');
                cy.get('.news-recommended-link.title-link.custom-col').eq(4).find('a').should('have.attr', 'href', recommendednewslink)
            });
    }

}
export default TrendingNews