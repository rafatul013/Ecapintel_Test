const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Z.PAX Automation Test Report',
  },
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        //Visit Url
        'cypress/e2e/BaseUrl/BaseUrlTest.cy.js',
        //Check header
        'cypress/e2e/Headerfooter/header.cy.js',
        // Check Footer
        'cypress/e2e/Footer/footer.cy.js',
        //Check Sign In
        'cypress/e2e/Signin/signin.cy.js',
        //Check Sign Up
        'cypress/e2e/Signup/signup.cy.js',
        //Visit Home Page
        'cypress/e2e/Homepage/homepage.cy.js',
        //Visit SNF Page
        'cypress/e2e/SNF360/snf360.cy.js',
        //Visit Tools and Resource Page
        'cypress/e2e/ToolsResource/tools_resource.cy.js',
        //Check Headline News
        'cypress/e2e/News/newspage.cy.js',
        //Check Headline News
        'cypress/e2e/News/headlinenews.cy.js',
        //Check Latest News
        'cypress/e2e/News/latestnews.cy.js'
      ]
      return config;
    },
  },
});

