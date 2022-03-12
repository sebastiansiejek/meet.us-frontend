/// <reference types="Cypress" />

describe('Display events', () => {
  it('upcoming events', () => {
    cy.visit('http://localhost:3001/events');
    cy.antdSelect('[data-cy="select-event-type"]', 'Upcoming');
    cy.get('[data-cy="event-card"]').should('be.visible');
  });
});
