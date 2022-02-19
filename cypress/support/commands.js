// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('antdSelect', (selector, text) => {
  cy.get(`.ant-select${selector} .ant-select-selector`).click();
  cy.get(`.ant-select${selector} input[type="search"]`)
    .invoke('attr', 'aria-owns')
    .then(($selector) => {
      cy.get(
        `[role="listbox"]#${$selector} + .rc-virtual-list .ant-select-item[title="${text}"]`,
      ).click();
    });
});
