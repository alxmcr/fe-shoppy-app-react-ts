import CardFilterProductsEmpty from '.';

describe('CardFilterProductsEmpty spec', () => {
  it('renders correctly', () => {
    cy.mount(<CardFilterProductsEmpty />);

    cy.get('[data-cy="cy-filter-products-empty-title"]').should('be.visible');
    cy.get('[data-cy="cy-filter-products-empty-message"]').should('be.visible');
    cy.get('[data-cy="cy-filter-products-empty-button-reset-filter"]').should(
      'be.visible',
    );
    cy.get('[data-cy="cy-filter-products-empty-link-add-product"]').should(
      'be.visible',
    );
    cy.get('[data-cy="cy-filter-products-empty-title"]').should(
      'have.text',
      'No products found',
    );
    cy.get('[data-cy="cy-filter-products-empty-message"]').should(
      'have.text',
      'We are so sorry!',
    );
    cy.get('[data-cy="cy-filter-products-empty-button-reset-filter"]').should(
      'have.text',
      'Reset filter',
    );
    cy.get('[data-cy="cy-filter-products-empty-link-add-product"]').should(
      'have.text',
      'Add new product',
    );
  });
});
