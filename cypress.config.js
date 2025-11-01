import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-mochawesome-reporter",
    watchForFileChanges: false
  },
});
