const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xqcsnk',
  reporter: 'cypress-mochawesome-reporter',
//  reporterOptions: {
//    "reportDir": "cypress/reports/mocha",
//    "reportFilename": "cypressReport",
//    charts: true,
//    json: true,
//    "reportPageTitle": "custom-title",
//    embeddedScreenshots: true,
//    inlineAssets: true,
//    saveAllAttempts: false,
//    overwrite: true
//  },
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
      "overwrite": false,
      "html": false,
      "json": true
  },
  e2e: {
    // experimentalSessionAndOrigin: true,
    // testIsolation: "off" ,
    // cacheAcrossSpecs: true,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config),
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
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
