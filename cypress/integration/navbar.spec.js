/// <reference types="Cypress" />

describe('Navbar', () => {
  it('click on site logo in navbar should redirect to homepage', () => {
    const homepageUrl = 'http://localhost:3001/';

    cy.viewport(1920, 1080);
    cy.visit(homepageUrl);
    cy.get('[data-cy="navbar-logo"]').click();
    cy.url().should('include', homepageUrl);
  });
});
