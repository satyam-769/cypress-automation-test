const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // viewportWidth: 760,  // We can set a config for all test
  // viewportHeight: 535
});
