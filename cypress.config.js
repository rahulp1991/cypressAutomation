
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g97nvp',
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    
      // implement node event listeners here
      baseUrl: 'https://account.sb.forusall.com/login',
      specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      //excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],


    
  },
});