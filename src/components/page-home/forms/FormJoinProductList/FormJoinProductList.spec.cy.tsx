import FormJoinProductList from '.';

describe('FormJoinProductList spec', () => {
  it('renders correctly', () => {
    const onJoinProductList = cy.stub();
    const resetStateJoinList = cy.stub();

    cy.mount(
      <FormJoinProductList
        onJoinProductList={onJoinProductList}
        resetStateJoinList={resetStateJoinList}
      />,
    );

    cy.get('[data-cy="cy-token-input"]').should('be.visible');
    cy.get('[data-cy="button-join-shopping-list"]').should('be.visible');
  });
});
