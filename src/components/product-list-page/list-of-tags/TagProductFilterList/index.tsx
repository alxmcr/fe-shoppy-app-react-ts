import React from 'react';
import { TagProductFilter } from '../../../../@types/appTypes';
import { FILTER_KEYS } from '../../../../constants/constants-app';
import { ProductFilterConditionsContext } from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import TagProductFilterItem from '../TagProductFilterItem';
import './TagProductFilterList.scss';

type TagProductFilterListProps = {
  filterProductTags: TagProductFilter[];
};

export default function TagProductFilterList({
  filterProductTags = [],
}: TagProductFilterListProps) {
  const {
    setFilterProductName,
    setFilterProductFreqTime,
    setFilterProductTags,
  } = React.useContext(ProductFilterConditionsContext);

  const removeTagFilter = (tagKey = '') => {
    if (tagKey === FILTER_KEYS.NAME) {
      setFilterProductName('');
    } else if (tagKey === FILTER_KEYS.FREQ_TIME) {
      setFilterProductFreqTime(null);
    }

    const tagsWithoutSomeTag = filterProductTags.filter(
      (productTag) => productTag.key !== tagKey,
    );

    setFilterProductTags(tagsWithoutSomeTag);
  };

  if (filterProductTags.length === 0) return null;

  return (
    <ul className="tag-product-filter-list" data-cy="cy-list-filter-tags">
      {filterProductTags.map((filterTag) => (
        <TagProductFilterItem
          key={filterTag.key}
          tagProductFilter={filterTag}
          onClickRemoveTag={() => removeTagFilter(filterTag.key)}
        />
      ))}
    </ul>
  );
}
