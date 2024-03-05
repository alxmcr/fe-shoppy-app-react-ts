import { SOON } from '../../src/constants/constants-products';

describe('ProductListPage spec', () => {
  const TOKEN_VALID = 'vital cling flare';

  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-cy="cy-token-input"]').should('be.visible');
    cy.get('[data-cy="cy-token-input"]').type(TOKEN_VALID);
    cy.get('[data-cy="button-join-shopping-list"]').should('be.visible');
    cy.get('[data-cy="button-join-shopping-list"]').click();
  });

  it('list products by token', () => {
    cy.get('[data-cy="list-of-all-products"]').should('be.visible');
    cy.get('.product-list-item').should('have.length', 3);
  });

  it('list products by token, and filter by a valid name', () => {
    const FILTER_NAME = 'LEMON';

    cy.get('[data-cy="list-of-all-products"]').should('be.visible');
    cy.get('.product-list-item').should('have.length', 3);

    // Header
    cy.get('[data-cy="cy-header-button-filter-products"]').should('be.visible');
    cy.get('[data-cy="cy-header-button-filter-products"]').click();

    // Form filter
    cy.get('[data-cy="cy-filter-input-product-name"]').should('be.visible');
    cy.get(`[data-cy="label-radiobutton-${SOON.code}"]`).should('be.visible');

    // Filter data
    cy.get('[data-cy="cy-filter-input-product-name"]').type(FILTER_NAME);

    // Apply filter
    cy.get('[data-cy="cy-filter-btn-apply-filter"]').should('be.visible');
    cy.get('[data-cy="cy-filter-btn-apply-filter"]').click();

    // Filter products
    cy.get('.product-list-item').should('have.length', 1);
  });

  it('list products by token, filter by an invalid name, and no results message', () => {
    const FILTER_NAME = 'no-exist-product';

    cy.get('[data-cy="list-of-all-products"]').should('be.visible');
    cy.get('.product-list-item').should('have.length', 3);

    // Header
    cy.get('[data-cy="cy-header-button-filter-products"]').should('be.visible');
    cy.get('[data-cy="cy-header-button-filter-products"]').click();

    // Form filter
    cy.get('[data-cy="cy-filter-input-product-name"]').should('be.visible');
    cy.get(`[data-cy="label-radiobutton-${SOON.code}"]`).should('be.visible');

    // Filter data
    cy.get('[data-cy="cy-filter-input-product-name"]').type(FILTER_NAME);

    // Apply filter
    cy.get('[data-cy="cy-filter-btn-apply-filter"]').should('be.visible');
    cy.get('[data-cy="cy-filter-btn-apply-filter"]').click();

    // No results
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

    // Reset filter
    cy.get('[data-cy="cy-filter-products-empty-button-reset-filter"]').click();

    // All products
    cy.get('[data-cy="list-of-all-products"]').should('be.visible');
    cy.get('.product-list-item').should('have.length', 3);
  });
});
