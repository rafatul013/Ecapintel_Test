class  BaseUrl {
    visitpage () {
         cy.visit("https://qa.ecapintel.com");
         cy.get('.close > span').click();
         //cy.wait(1000);
     }
     visitnewspage () {
        cy.visit("https://qa.ecapintel.com/news");
        //cy.wait(1000);
    }
    visitsnfpage () {
        cy.visit("https://qa.ecapintel.com/snf360");
        //cy.wait(1000);
    }
    visittoolsresourcepage(){
        cy.visit("https://qa.ecapintel.com/resources");
       // cy.wait(1000);
    }
    visitacademypage(){
        cy.visit("https://qa.ecapintel.com/academy");
       // cy.wait(1000);
    }
 }
 export default BaseUrl;