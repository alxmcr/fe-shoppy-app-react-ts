import { KIND_OF_SOON } from '../../src/constants/constants-products';
import { ProductListRoute } from '../../src/constants/constants-routes';

describe('AddProductPage e2e spec', () => {
  const TOKEN_VALID = 'clock seep yacht';

  beforeEach(() => {
    cy.visit('/');
  });

  it('create the product', () => {
    // Assertions
    cy.get('[data-cy="cy-token-input"]').should('be.visible');
    cy.get('[data-cy="cy-token-input"]').type(TOKEN_VALID);
    cy.get('[data-cy="button-join-shopping-list"]').should('be.visible');
    cy.get('[data-cy="button-join-shopping-list"]').click();

    cy.url().should('include', ProductListRoute.path);

    cy.get('[data-cy="navlink-add-item"]').should('be.visible');
    cy.get('[data-cy="navlink-add-item"]').click();

    cy.get('[data-cy="form-add-product-input-name"]').should('be.visible');

    // User interactions
    const productNameTest = 'test-product-003';
    cy.get('[data-cy="form-add-product-input-name"]').type(productNameTest);
    cy.get(`[data-cy="label-radiobutton-${KIND_OF_SOON.code}"]`).click();
    cy.get('[data-cy="button-save-item"]').click();

    cy.get('[data-cy="navlink-shopping-list"]').should('be.visible');
    cy.get('[data-cy="navlink-shopping-list"]').click();

    // Check product exists
    cy.contains(productNameTest).should('exist');
  });
});
