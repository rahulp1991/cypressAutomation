const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'id8r6p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
