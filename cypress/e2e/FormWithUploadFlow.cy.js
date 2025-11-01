import * as LoginPage from "./pages/loginPage.js"
import * as LandingPage from './pages/landingPage.js';
import { getCurrentTime } from '../support/utils.js';
import * as AutomationPage from './pages/automationPage.js';
import * as TaskBotPage from './pages/taskBotPage.js';
import * as FormPage from './pages/formPage.js'

describe('UI Task for Automation Anywhere', () => {
  it('Validate the Creation of Form with File Upload functionality', () => {
    cy.visit('https://community.cloud.automationanywhere.digital/#/login');
    cy.fixture('testdata').then((data) => {
      LoginPage.logInToApplication(data.username, data.password)
      LandingPage.getElementAutomation().click();
      const formName = data.formBotName + getCurrentTime();
      AutomationPage.createFormBot(formName)
      TaskBotPage.verifyTheToastMessage(formName)
      FormPage.getButtonElementTextBox().should('be.visible', {timeout: 5000})
      FormPage.getButtonElementSelectFile().should('be.visible')
      FormPage.getDynamicButtonElement('Image').should('be.visible')
      FormPage.getElementOfFormCanva().should('be.visible')
      FormPage.dragTheDesiredElementIntoFormCanvas("Text Box")
      FormPage.dragTheDesiredElementIntoFormCanvas("Select File")
      FormPage.verifyTheTextBoxProperties()
      FormPage.verifyTheSelectFileProperties()
      FormPage.verifyTheLabelOfTextBoxElement('TextBox', 'Input Text')
      FormPage.verifyTheLabelOfTextBoxElement('Input Text', ' ')
      FormPage.clickTheDesiredElementInCanvas('Select a file')
      const fileName = 'sampleUpload.pdf'
      FormPage.getIframe().find('.preview-fileupload a').attachFile(fileName)
      FormPage.getButtonSave().should('be.enabled')
      FormPage.getButtonSave().click()
      TaskBotPage.getElementToastMsg().should('contain.text', formName)
      TaskBotPage.getElementToastMsg().should('contain.text', 'successfully edited')
    })
  })
})