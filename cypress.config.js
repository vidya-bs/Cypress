const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xqcsnk',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // experimentalSessionAndOrigin: true,
    // testIsolation: "off" ,
    // cacheAcrossSpecs: true,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  }
});
