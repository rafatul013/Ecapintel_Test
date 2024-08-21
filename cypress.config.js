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
        //Check Sign In
        'cypress/e2e/Signin/signin.cy.js',
        //Check Sign Up
        'cypress/e2e/Signup/signup.cy.js',
        //Visit Home Page
        'cypress/e2e/Homepage/homepage.cy.js',
        //Visit News Page
        'cypress/e2e/News/headlinenews.cy.js'
        
      ]
      return config;
    },
  },
});

