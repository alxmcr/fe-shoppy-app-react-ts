import AppHeader from '.';

describe('AppHeader', () => {
  it('renders correctly', () => {
    const TOKEN = 'vital cling flare';
    const subtitleText = 'Your shopping list';

    cy.mount(<AppHeader title={TOKEN} subtitle={subtitleText} />, {
      routerProps: {
        initialEntries: ['/list'],
      },
    });

    cy.get('[data-cy="cy-header-token"]').should('be.visible');
    cy.get('[data-cy="cy-header-button-filter-products"]').should('be.visible');
    cy.get('[data-cy="cy-header-button-sign-out"]').should('be.visible');
    cy.get('[data-cy="cy-header-button-copy-token"]').should('be.visible');

    cy.get('[data-cy="cy-header-token"]').should('have.text', TOKEN);
  });
});
