export const getElementUserName = () => {
  return cy.get('input[name="username"]', {timeout:10000})
}

export const getElementPassword = () => {
  return cy.get('input[name="password"]')
}

export const getButtonLogIn = () => {
  return cy.get('button[name="submitLogin"]')
}

export const logInToApplication = (username, password) => {
  getElementUserName().type(username);
  getElementPassword().type(password);
  getButtonLogIn().click();
}