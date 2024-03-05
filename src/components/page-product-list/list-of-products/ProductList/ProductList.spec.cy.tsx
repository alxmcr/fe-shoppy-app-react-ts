import ProductList from '.';
import { mockProductsWithThreeProducts } from '../../../../mockData/generateProductsMock';

describe('ProductList spec', () => {
  it('renders correctly, empty message', () => {
    cy.mount(<ProductList products={[]} />);

    // Empty message
    cy.get('[data-cy="cy-empty-list-title"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-message"]').should('be.visible');
    cy.get('[data-cy="cy-empty-list-link-add-product"]').should('be.visible');
  });

  it('renders correctly, list with three products', () => {
    cy.mount(<ProductList products={mockProductsWithThreeProducts} />);

    cy.get('[data-cy="list-of-all-products"]').should('be.visible');
    cy.get('.product-list-item').should('have.length', 3);
  });
});
