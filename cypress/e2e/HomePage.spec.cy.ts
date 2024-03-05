describe('HomePage e2e spec', () => {
  const TOKEN_TEST = 'panic enjoy angus';

  beforeEach(() => {
    cy.visit('/');
  });

  it('join a shopping list with a valid token', () => {
    // Assertions
    cy.get('[data-cy="cy-token-input"]').should('be.visible');
    cy.get('[data-cy="cy-token-input"]').type(TOKEN_TEST);
    cy.get('[data-cy="button-join-shopping-list"]').should('be.visible');
    cy.get('[data-cy="button-join-shopping-list"]').click();

    // we should be redirected to /list
    cy.url().should('include', '/list');

    cy.get('[data-cy="cy-header-token"]').should('be.visible');
    cy.get('[data-cy="cy-header-token"]').should('have.text', TOKEN_TEST);
  });

  it('create a new shopping list', () => {
    // Assertions
    cy.get('[data-cy="button-create-new-list"]').should('be.visible');
    cy.get('[data-cy="button-create-new-list"]').click();

    // we should be redirected to /list
    cy.url().should('include', '/list');

    cy.get('[data-cy="cy-empty-list-title"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-title"]').should('have.text', 'Congrats!');

    cy.get('[data-cy="cy-empty-list-message"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-message"]').should(
      'have.text',
      'Your shopping list is empty!',
    );

    cy.get('[data-cy="cy-empty-list-link-add-product"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-link-add-product"]').should(
      'have.text',
      'Add new product',
    );
  });
});
