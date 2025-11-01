import * as LoginPage from './pages/loginPage.js';
import * as LandingPage from './pages/landingPage.js';
import * as AutomationPage from './pages/automationPage.js';
import * as TaskBotPage from './pages/taskBotPage.js';
import { getCurrentTime } from '../support/utils.js';

describe('UI Task for Automation Anywhere', () => {
  it('Validate the Creation of Task Bot and its fields functionality', () => {
    cy.visit('https://community.cloud.automationanywhere.digital/#/login');
    cy.fixture('testdata').then((data) => {
      LoginPage.logInToApplication(data.username, data.password)
      LandingPage.getElementAutomation().click();
      const taskBotName = data.taskBotName + getCurrentTime();
      AutomationPage.createTaskBot(taskBotName)
      TaskBotPage.verifyTheToastMessage(taskBotName)
      TaskBotPage.getElementSaveButton().should('have.attr', 'data-input-status', 'DISABLED')
      TaskBotPage.searchAndSelectDesiredAction(data.taskBotAction);
      TaskBotPage.getElementMessageBoxOnCanvas().should('be.visible')
      TaskBotPage.getElementSaveButton().should('have.attr', 'data-input-status', 'INTERACTIVE')
      TaskBotPage.verifyMessageBoxTitleField()
      TaskBotPage.verifyMessageBoxContentField()
      TaskBotPage.verifyMessageBoxScrollLineField()
      TaskBotPage.verifyMessageBoxCloseAfterCheckBox()
      TaskBotPage.getElementSaveButton().click()
      cy.waitForSpinnerToDisappear()
      TaskBotPage.ConfigureMessageBox(data.messageTitle, data.messageContent)
      TaskBotPage.ConfigureMessageBox(data.messageTitle, "Pay $$5.0", 25, 4)
    });
  });
});
