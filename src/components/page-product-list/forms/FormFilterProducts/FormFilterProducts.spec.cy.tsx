import FormFilterProducts from '.';
import { SOON } from '../../../../constants/constants-products';

describe('FormFilterProducts spec', () => {
  it('renders correctly', () => {
    const applyProductFilter = cy.stub();
    const resetProductFilter = cy.stub();

    cy.mount(
      <FormFilterProducts
        applyProductFilter={applyProductFilter}
        resetProductFilter={resetProductFilter}
      />,
    );

    cy.get('[data-cy="cy-form-filter-product"]').should('be.visible');
    cy.get('[data-cy="cy-filter-input-product-name"]').should('be.visible');
    cy.get(`[data-cy="label-radiobutton-${SOON.code}"]`).should('be.visible');
    cy.get('[data-cy="cy-filter-btn-apply-filter"]').should('be.visible');
    cy.get('[data-cy="cy-filter-btn-reset-filter"]').should('be.visible');
  });
});
