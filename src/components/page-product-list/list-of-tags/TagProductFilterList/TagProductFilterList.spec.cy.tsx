import { filterTagName } from '../../../../mockData/generateFilterProductTags';
import TagProductFilterList from '../TagProductFilterList';

describe('TagProductFilterList spec', () => {
  it('renders correctly, only name as filter product tag', () => {
    cy.mount(<TagProductFilterList filterProductTags={[filterTagName]} />);

    cy.get('[data-cy="cy-list-filter-tags"]').should('be.visible');
    cy.get(`[data-cy="cy-tag-product-filter-${filterTagName.key}"]`).should(
      'be.visible',
    );
    cy.get(`[data-cy="cy-tag-product-filter-${filterTagName.key}"]`).should(
      'have.text',
      filterTagName.value,
    );
    cy.get(`[data-cy="btn-remove-tag-${filterTagName.key}"]`).should(
      'be.visible',
    );
  });
});
