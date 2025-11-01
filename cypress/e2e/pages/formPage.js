export const getIframe = () => {
  cy.frameLoaded('iframe.modulepage-frame')
  return cy.iframe('iframe.modulepage-frame').then(cy.wrap)
}

export const getButtonElementTextBox = () => {
  return getIframe().find('span').contains('Text Box')
}

export const getButtonElementSelectFile = () => {
  return getIframe().find('span').contains('Select File')
}
export const getButtonSave = () => {
  return getIframe().find('button[name="save"]')
}

export const getDynamicButtonElement = (buttonName) => {
  return getIframe().find('span').contains(`${buttonName}`)
}

export const getElementOfFormCanva = () => {
  return getIframe().find('div.formcanvas-content')
}

export const dragTheDesiredElementIntoFormCanvas = (elementToDrag) => {
  cy.iframe('.modulepage-frame').within(frame => {
    cy.wrap(frame).find('span').contains(elementToDrag).drag('.formcanvas__leftpane', {force: true})
      .then(() => {
        cy.get('.formcanvas__leftpane').should('be.visible', {force: true});
        cy.get('.formcanvas__leftpane').trigger('drop', {force: true});
        cy.wait(500);
      })
  })
}

export const clickTheDesiredElementInCanvas = (elementName) => {
  return getIframe().contains(elementName).click()
}

export const getElementEditorLayoutPropertiesTab = () => {
  return getIframe().find('button[data-tab-name="Properties"]')
}

export const getElementPropertyHeaderTextOfDesiredElement = (elementType) => {
  return getIframe().find(`[data-text="Properties - ${elementType}"]`)
}

export const getButtonReset = () => {
  return getIframe().find('button[aria-label="Reset"]')
}

export const getButtonDelete = () => {
  return getIframe().find('button[aria-label="Delete"]')
}

export const getElementIDField = () => {
  return getIframe().find('[data-name="id"]')
}

export const getElementLabelField = () => {
  return getIframe().find('[data-name="label"]')
}

export const getElementDefaultValueField = () => {
  return getIframe().find('[data-name="defaultValue"]')
}

export const getElementMinField = () => {
  return getIframe().find('[data-name="minLength"]')
}

export const getElementMaxField = () => {
  return getIframe().find('[data-name="maxLength"]')
}

export const getElementHintTextField = () => {
  return getIframe().find('[data-name="hintText"]')
}

export const getElementToolTipField = () => {
  return getIframe().find('[data-name="toolTip"]')
}

export const getElementMakeFieldRequiredCheckBox = () => {
  return getIframe().find('span[aria-label="Make field required"]')
}

export const getElementMakeFieldUneditableCheckBox = () => {
  return getIframe().find('span[aria-label="Make field uneditable"]')
}

export const getElementMakeFieldHiddenCheckBox = () => {
  return getIframe().find('span[aria-label="Make field hidden"]')
}

export const getElementMaskDataCheckBox = () => {
  return getIframe().find('span[aria-label="Mask data"]')
}

export const getElementDesiredCheckBox = (elementName) => {
  return getIframe().find(`span[aria-label="${elementName}"]`)
}

export const getElementDesiredRadioButton = (elementName) => {
  return getIframe().find(`span[aria-label="${elementName}"]`)
}

export const getElementFileFormatField = () => {
  return getIframe().find('[name="fileFormat"]')
}

export const getElementEnableFileDownloadCheckBox = () => {
  return getIframe().find('span[aria-label="Enable file download"]')
}

export const verifyDesiredElementTextContent = (element, ExpectedText) => {
  element.should('have.attr', 'data-value', ExpectedText)
}

export const verifyDesiredCheckBoxStatus = (element, Checked_true_False) => {
  element.should('have.attr', 'aria-checked', Checked_true_False)
}

export const inputTextInDesiredField = (element, textToEnter) => {
  element.clear().type(textToEnter)
}

export const verifyTheTextBoxProperties = () => {
  clickTheDesiredElementInCanvas('TextBox').click()
  getElementEditorLayoutPropertiesTab().should('be.visible')
  getElementPropertyHeaderTextOfDesiredElement("Text Box").should('be.visible')
  getButtonReset().should('be.visible')
  getButtonDelete().should('be.visible')
  getElementIDField().should('be.visible')
  // verifyDesiredElementTextContent(getElementIDField(), 'TextBox0')
  getElementLabelField().should('be.visible')
  verifyDesiredElementTextContent(getElementLabelField(), 'TextBox')
  getElementDefaultValueField().should('be.visible')
  verifyDesiredElementTextContent(getElementDefaultValueField(), '')
  getElementMinField().should('be.visible')
  verifyDesiredElementTextContent(getElementMinField(), '')
  getElementMaxField().should('be.visible')
  verifyDesiredElementTextContent(getElementMaxField(), '')
  getElementHintTextField().should('be.visible')
  verifyDesiredElementTextContent(getElementHintTextField(), '')
  getElementToolTipField().should('be.visible')
  verifyDesiredElementTextContent(getElementToolTipField(), '')
  getElementDesiredCheckBox('Make field required').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field required'), "false")
  getElementDesiredCheckBox('Make field uneditable').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field uneditable'), 'false')
  getElementDesiredCheckBox('Mask data').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Mask data'), 'false')
  getElementDesiredCheckBox('Make field hidden').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field hidden'), 'false')
}

export const verifyTheSelectFileProperties = () => {
  clickTheDesiredElementInCanvas('Select a file').click()
  getElementEditorLayoutPropertiesTab().should('be.visible')
  getElementPropertyHeaderTextOfDesiredElement("Select File").should('be.visible')
  getButtonReset().should('be.visible')
  getButtonDelete().should('be.visible')
  getElementIDField().should('be.visible')
  verifyDesiredElementTextContent(getElementIDField(), 'File0')
  getElementLabelField().should('be.visible')
  verifyDesiredElementTextContent(getElementLabelField(), 'Select a file')
  getElementDesiredRadioButton("Supported Type").should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredRadioButton("Supported Type"), 'true')
  getElementDesiredRadioButton("Unsupported Type").should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredRadioButton("Unsupported Type"), 'false')
  getElementFileFormatField().should('be.visible')
  getElementEnableFileDownloadCheckBox().should('be.visible')
  verifyDesiredCheckBoxStatus( getElementEnableFileDownloadCheckBox(), 'false')
  getElementHintTextField().should('be.visible')
  verifyDesiredElementTextContent(getElementHintTextField(), '')
  getElementToolTipField().should('be.visible')
  verifyDesiredElementTextContent(getElementToolTipField(), '')
  getElementDesiredCheckBox('Make field required').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field required'), "false")
  getElementDesiredCheckBox('Make field uneditable').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field uneditable'), 'false')
  getElementDesiredCheckBox('Make field hidden').should('be.visible')
  verifyDesiredCheckBoxStatus(getElementDesiredCheckBox('Make field hidden'), 'false')
}

export const verifyTheLabelOfTextBoxElement = (InitialLabel, modifyTheLabel) => {
  clickTheDesiredElementInCanvas(InitialLabel).click()
  getElementLabelField().find('input').clear().type(modifyTheLabel)
  getIframe().find('.preview-textbox input').should('have.attr', 'aria-label', modifyTheLabel)
}

export const verifyTheDefaultValueOfTextBoxElement = (labelName, dafaulttext) => {
  clickTheDesiredElementInCanvas(labelName).click()
  getElementDefaultValueField().find('input').clear().type(dafaulttext)
  getIframe().find('.preview-textbox [data-path="TextInput"]').should('have.attr', 'data-value', dafaulttext)
}