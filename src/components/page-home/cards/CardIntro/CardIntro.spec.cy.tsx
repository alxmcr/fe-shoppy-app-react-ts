import CardIntro from '.';

describe('CardIntro spec', () => {
  it('renders correctly', () => {
    cy.mount(<CardIntro />);

    cy.get('[data-cy="cy-app-title"]').should('be.visible');
    cy.get('[data-cy="cy-app-description"]').should('be.visible');
  });
});
