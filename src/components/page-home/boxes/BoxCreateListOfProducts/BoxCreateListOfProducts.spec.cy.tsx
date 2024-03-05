import BoxCreateListOfProducts from '.';

describe('BoxCreateListOfProducts spec', () => {
  it('renders correctly', () => {
    cy.mount(<BoxCreateListOfProducts />);

    // Assertions
    cy.get('[data-cy="button-create-new-list"]').should('be.visible');
  });
});
