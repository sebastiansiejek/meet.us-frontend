/// <reference types="Cypress" />

describe('Login form validation', () => {
  it('is incorrect email', () => {
    cy.visit('http://localhost:3001/join-to-us');
    cy.get('[data-cy="login-form-login"]').type('tsss');
    cy.get('[data-cy="login-form-password"]').type('password');
    cy.get('[data-cy="login-form-submit"]').click();
    cy.get('[data-cy="login-form"] .ant-alert-message').should('be.visible');
    cy.get('[data-cy="login-form"] .ant-alert-message').contains(
      'Invalid email',
    );
  });
});
