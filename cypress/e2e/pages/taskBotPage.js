export const getElementToastMsg = () => {
  return cy.get('div[data-path="Toast"]');
};

export const getElementSearchBox = () => {
  return cy.get('input[placeholder="Search actions"]');
};

export const getTaskActionButton = (actionName) => {
  return cy.get('button[data-indent="1"]').contains(actionName, { matchCase: false });
};

export const getElementSaveButton = (taskName) => {
  return cy.get('button[name="save"]')
}

export const searchAndSelectDesiredAction = (actionName) => {
  getElementSearchBox().type(actionName);
  getTaskActionButton(actionName).dblclick();
};

export const getElementCanvas = () => {
  return cy.get('.editor-layout__canvas');
};

export const getElementMessageBoxOnCanvas = () => {
  return getElementCanvas().find('div[data-package-object-key="messagebox#messagebox"]');
};

export const getElementMessageBoxTitleField = () => {
  return cy.get('div[data-label="Enter the message box window title"]');
};

export const getElementMessageBoxTitleFieldLabel = () => {
  return getElementMessageBoxTitleField().find('.field-label__label-content');
};

export const getElementMessageBoxTitleFieldInput = () => {
  return getElementMessageBoxTitleField().find('[role="textbox"]');
};

export const getElementMessageBoxTitleFieldInsertValueBtn = () => {
  return getElementMessageBoxTitleField().find('button');
};

export const getElementToolTip = () => {
  return cy.get('div[role="tooltip"]');
};

export const verifyMessageBoxTitleField = () => {
  getElementMessageBoxTitleFieldLabel().should('be.visible');
  getElementMessageBoxTitleFieldInput().should('be.visible');
  getElementMessageBoxTitleFieldInsertValueBtn().should('be.visible');
  getElementMessageBoxTitleFieldLabel().should('have.text', 'Enter the message box window title');
  getElementMessageBoxTitleFieldInput().should('have.text', 'Automation Anywhere Enterprise Client');
  getElementMessageBoxTitleFieldInput().clear();
  getElementToolTip().should('be.visible').contains(/Cannot Be Empty/i);
  getElementMessageBoxTitleFieldInput().type('SampleTitle');
  getElementMessageBoxTitleFieldInput().press('Tab');
  getElementMessageBoxTitleFieldInput().should('have.text', 'SampleTitle');
};

export const getElementMessageBoxContentField = () => {
  return cy.get('div[data-label="Enter the message to display"]');
};

// export const getElementMessageBoxContentFieldLabel = () => {
//   return getElementMessageBoxContentField().find('.field-label__label')
// }
//
// export const getElementMessageBoxContentFieldInput = () => {
//   return getElementMessageBoxContentField().find('[role="textbox"]');
// }
//
// export const getElementMessageBoxContentFieldInsertValueBtn = () => {
//   return getElementMessageBoxContentField().find('button');
// }

export const getElementOfDesiredFieldsLabel = (fieldNameElement) => {
  return fieldNameElement.find('.field-label__label');
};

export const getElementOfDesiredFieldsInput = (fieldNameElement) => {
  return fieldNameElement.find('input[name="timeOut"], div[role="textbox"]');
};

export const getElementOfDesiredFieldsInsertValueBtn = (fieldNameElement) => {
  return fieldNameElement.find('button');
};

export const verifyMessageBoxContentField = () => {
  getElementOfDesiredFieldsLabel(getElementMessageBoxContentField()).should('be.visible');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).should('be.visible');
  getElementOfDesiredFieldsInsertValueBtn(getElementMessageBoxContentField()).should('be.visible');
  getElementOfDesiredFieldsLabel(getElementMessageBoxContentField()).should('have.text', 'Enter the message to display',);
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).should('have.attr', 'placeholder', 'Required');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).should('have.value', '');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).type('Hello World!');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).press('Tab');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).should('have.text','Hello World!');
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).clear();
  getElementToolTip()
    .should('be.visible')
    .contains(/Cannot Be Empty/i);
};

export const getElementMessageBoxScrollLinesField = () => {
  return cy.get('div[data-label="Scrollbar after lines"]');
};

export const verifyMessageBoxScrollLineField = () => {
  getElementOfDesiredFieldsLabel(getElementMessageBoxScrollLinesField()).should('be.visible');
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).should('be.visible');
  getElementOfDesiredFieldsInsertValueBtn(getElementMessageBoxScrollLinesField()).should('be.visible');
  getElementOfDesiredFieldsLabel(getElementMessageBoxScrollLinesField()).should('have.text', 'Scrollbar after lines');
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).should('have.text', '30');
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).clear();
  getElementToolTip()
    .should('be.visible')
    .contains(/Cannot Be Empty/i);
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).should('have.value', '');
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).type(25);
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).press('Tab');
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).should('have.text', '25');
};

export const getElementMessageBoxCloseAfterField = () => {
  return cy.get('div[data-name="closeMsgBox"]');
};

export const getElementMessageBoxCloseAfterCheckBox = () => {
  return getElementMessageBoxCloseAfterField().find('input[name="closeMsgBox"]')
}

export const getElementMessageBoxTimeOutField = () => {
  return cy.get('div[data-label="Seconds"]');
};

export const getElementCanvaMessageDetail = () => {
  return cy.get('span.taskbotnodelabel-details-string')
}

export const verifyMessageBoxCloseAfterCheckBox = () => {
  getElementMessageBoxCloseAfterField().should('be.visible');
  getElementMessageBoxCloseAfterCheckBox().should('not.be.checked');
  getElementMessageBoxTimeOutField().should('be.visible');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).should('have.attr', 'readonly');
  getElementMessageBoxCloseAfterCheckBox().check({force: true});
  getElementOfDesiredFieldsLabel(getElementMessageBoxTimeOutField()).should('have.text','Seconds');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).should('have.text','5');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).clear();
  getElementToolTip()
    .should('be.visible')
    .contains(/Cannot Be Empty/i);
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).should('have.value', '');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).type(3);
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).press('Tab');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).should('have.text', '3');
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).clear()
  getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).type(5);
};

export const ConfigureMessageBox = (Title, MessageContent, ScrollAfterLine=30, CloseAfter=5) => {
  getElementMessageBoxTitleFieldInput().clear().type(Title);
  getElementOfDesiredFieldsInput(getElementMessageBoxContentField()).clear().type(MessageContent);
  getElementOfDesiredFieldsInput(getElementMessageBoxScrollLinesField()).clear().type(ScrollAfterLine);
  if ( CloseAfter !== 5 ) {
    getElementMessageBoxCloseAfterCheckBox().check({force: true});
    getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).clear();
    getElementOfDesiredFieldsInput(getElementMessageBoxTimeOutField()).type(CloseAfter);
  }
  getElementSaveButton().click()
  cy.waitForSpinnerToDisappear()
  getElementCanvaMessageDetail().should('have.text', MessageContent)
  if ( MessageContent === "" ) {

  }
}

export const verifyTheToastMessage = (nameOfTheBot) => {
  getElementToastMsg().should('be.visible');
  getElementToastMsg().should('contain.text', nameOfTheBot);
  getElementToastMsg().should('contain.text', 'successfully created');
}