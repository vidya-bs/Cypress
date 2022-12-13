const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xqcsnk',
  
  e2e: {
    // experimentalSessionAndOrigin: true,
    // testIsolation: "off" ,
    // cacheAcrossSpecs: true,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      // implement node event listeners here
    },
  },
});