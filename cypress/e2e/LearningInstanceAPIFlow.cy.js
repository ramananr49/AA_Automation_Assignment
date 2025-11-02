import { getCurrentTime } from '../support/utils.js';
import {LoginPage} from './pages'

describe('API Functionality', () => {
  beforeEach(() => {
    cy.visit('https://community.cloud.automationanywhere.digital/#/login');
  });

  it('should drag an item and drop it into the target area', () => {

    cy.fixture('testdata').then((data) => {
      LoginPage.logInToApplication(data.username, data.password)
    })

    cy.contains('AI', {timeout: 10_000}).click();
    cy.contains('Document Automation').click();
    cy.wait(5_000);
    cy.iframe('iframe.modulepage-frame')
      .find('button', {timeout: 5_000})
      .contains('Create Learning Instance', {timeout: 5_000})
      .should('be.visible')
      .click();
    const instanceName = 'SampleInstance' + getCurrentTime();
    cy.iframe('iframe.modulepage-frame')
      .find('input[name="name"]', {timeout: 10_000})
      .type(instanceName);
    cy.iframe('iframe.modulepage-frame')
      .find('textarea[name="description"]')
      .type('This is a sample learning instance.');
    cy.iframe('iframe.modulepage-frame').find('button').contains('Next').click();

    cy.wait(2500);

    let startTime = 0;
    cy.intercept('POST', 'https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances', req => {
      startTime = Date.now();
    }).as('createInstance');
    cy.iframe('iframe.modulepage-frame').find('button[aria-label="Create"]').click();

    // Response time verification
    cy.wait('@createInstance').then(() => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      cy.log(`Response time: ${responseTime} ms`);
      expect(responseTime).to.be.lessThan(5000);
    });

    // Status code verification
    cy.get('@createInstance').its('response.statusCode').should('eq', 200);

    // Response body verification
    cy.get('@createInstance').its('response.body').then(response => {
      expect(response.name).to.be.equals(instanceName);
      expect(response.description).to.be.equals('This is a sample learning instance.');
      expect(response.languages[0].name).to.be.equals('English');
    });
  });
});