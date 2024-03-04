import React from 'react';
import { ProductFilterConditionsContext } from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import TagProductFilterList from '../../list-of-tags/TagProductFilterList';
import './BoxProductFilterTags.scss';

export default function BoxProductFilterTags() {
  const { filterProductTags } = React.useContext(
    ProductFilterConditionsContext,
  );

  return (
    <div className="box-product-filter-tags">
      <TagProductFilterList filterProductTags={filterProductTags} />
    </div>
  );
}
