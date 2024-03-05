import CardCongratsShoppingListEmpty from '.';

describe('CardCongratsShoppingListEmpty spec', () => {
  it('renders correctly', () => {
    cy.mount(<CardCongratsShoppingListEmpty />);

    cy.get('[data-cy="cy-empty-list-title"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-message"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-link-add-product"]').should('be.visible');
  });
});
