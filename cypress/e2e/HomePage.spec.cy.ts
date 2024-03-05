describe('HomePage e2e spec', () => {
  const TOKEN_TEST = 'panic enjoy angus';

  beforeEach(() => {
    cy.visit('/');
  });

  it('join a shopping list with a valid token', () => {
    // Assertions
    cy.get('[data-cy="cy-token-input"]').should('be.visible');
    cy.get('[data-cy="cy-token-input"]').type(TOKEN_TEST);
  });
});
