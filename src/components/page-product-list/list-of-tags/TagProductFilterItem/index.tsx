import { TagProductFilter } from '../../../../@types/appTypes';
import IconCircleCrossSmall from '../../../@atoms/icons-small/IconCircleCrossSmall';
import './TagProductFilterItem.scss';

type TagProductFilterItemProps = {
  tagProductFilter: TagProductFilter;
  onClickRemoveTag: () => void;
};

export default function TagProductFilterItem({
  tagProductFilter,
  onClickRemoveTag,
}: TagProductFilterItemProps) {
  if (tagProductFilter !== null) {
    return (
      <li
        className="tag-product-filter"
        id={tagProductFilter.key}
        aria-label={`tag-product-filter-${tagProductFilter.value}`}
        data-cy={`cy-tag-product-filter-${tagProductFilter.key}`}
      >
        <span
          className="tag-product-filter__text"
          data-cy={`text-product-filter-tag-${tagProductFilter.key}`}
        >
          {tagProductFilter?.value?.toUpperCase()}
        </span>
        <button
          className="tag-product-filter__btn-remove"
          onClick={onClickRemoveTag}
          aria-label={`Button remove tag: '${tagProductFilter.value}'`}
          data-cy={`btn-remove-tag-${tagProductFilter.key}`}
        >
          <IconCircleCrossSmall />
        </button>
      </li>
    );
  }

  return null;
}
