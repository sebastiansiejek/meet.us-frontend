/// <reference types="Cypress" />

describe('Navbar', () => {
  it('logo should redirect to homepage', () => {
    const homepageUrl = 'http://localhost:3001/';

    cy.visit(homepageUrl);
    cy.get('[data-cy="navbar-logo"]').click();
    cy.url().should('include', homepageUrl);
  });
});
