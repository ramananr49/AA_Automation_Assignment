import { getCurrentTime } from '../../support/utils.js';

export const getDropdownCreate = () => {
  return cy.get('button[name="createOptions"]');
}

export const getOptionEleTaskBot = () => {
  return cy.get('span[data-text="Task Bot…"]').parent();
}

export const getOptionEleForm = () => {
  return cy.get('span[data-text="Form…"]').parent();
}

export const getElementTaskBotName = () => {
  return cy.get('input[name="name"]');
}

export const getElementTaskBotCreateEdit = () => {
  return cy.get('button[aria-label="Create & edit"]');
}

export const createTaskBot = (botName) => {
  getDropdownCreate().click();
  getOptionEleTaskBot().click();
  getElementTaskBotName().type(botName);
  getElementTaskBotCreateEdit().click();
}

export const createFormBot = (formName) => {
  getDropdownCreate().click();
  getOptionEleForm().click();
  getElementTaskBotName().type(formName);
  getElementTaskBotCreateEdit().click();
}