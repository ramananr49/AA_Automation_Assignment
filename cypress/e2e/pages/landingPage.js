export const getElementAutomation = () => {
  return cy.get('a[title="Automation"]', { timeout: 10000 });
};
