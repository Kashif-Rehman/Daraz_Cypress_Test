const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  env: { ...process.env },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
