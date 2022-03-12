/// <reference types="Cypress" />

describe('User settings', () => {
  it('change language from english to polish on desktop', () => {
    cy.visit('http://localhost:3001');
    cy.viewport(1920, 1080);
    cy.get('[data-cy="navbar-user-settings-button"]').click();
    cy.get('[data-cy="navbar-user-settings"]').contains('a', 'Polish').click();
    cy.url().should('include', 'pl');
  });
});
