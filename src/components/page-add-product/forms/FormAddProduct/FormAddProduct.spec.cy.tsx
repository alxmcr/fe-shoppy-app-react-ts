import FormAddProduct from '.';
import { SOON } from '../../../../constants/constants-products';

describe('FormAddProduct spec', () => {
  it('renders correctly', () => {
    const setErrorSavingProduct = cy.stub();
    const setStatusSavingProduct = cy.stub();

    cy.mount(
      <FormAddProduct
        setErrorSavingProduct={setErrorSavingProduct}
        setStatusSavingProduct={setStatusSavingProduct}
      />,
    );

    cy.get('[data-cy="cy-form-add-product"]').should('be.visible');
    cy.get('[data-cy="form-add-product-input-name"]').should('be.visible');
    cy.get(`[data-cy="label-radiobutton-${SOON.code}"]`).should('be.visible');
    cy.get('[data-cy="button-save-item"]').should('be.visible');
  });
});
