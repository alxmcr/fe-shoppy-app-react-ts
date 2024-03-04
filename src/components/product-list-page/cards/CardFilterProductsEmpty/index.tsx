import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductFilterConditionsContext } from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import './CardFilterProductsEmpty.scss';
import IconInfo from '../../../atoms/icons-big/IconInfo';

export default function CardFilterProductsEmpty() {
  const {
    setFilterProductName,
    setFilterProductFreqTime,
    setFilterProductTags,
  } = React.useContext(ProductFilterConditionsContext);

  const onClickResetFilter = () => {
    setFilterProductName('');
    setFilterProductFreqTime(null);

    // Reset filter tags
    setFilterProductTags([]);
  };

  return (
    <article className="card-filter-product-list-empty">
      <div className="card-filter-product-list-empty__content">
        <IconInfo />
        <div className="card-filter-product-list-empty__details">
          <h1
            className="card-filter-product-list-empty__title"
            data-cy="cy-filter-products-empty-title"
          >
            No products found
          </h1>
          <p
            className="card-filter-product-list-empty__message"
            aria-label="We are so sorry!"
            data-cy="cy-filter-products-empty-message"
          >
            We are so sorry!
          </p>
        </div>
      </div>
      <div className="card-filter-product-list-empty__actions">
        <button
          className="card-filter-product-list-empty__button"
          onClick={onClickResetFilter}
          data-cy="cy-filter-products-empty-button-reset-filter"
        >
          Reset filter
        </button>
        <NavLink
          to="/add-product"
          className="card-filter-product-list-empty__navlink"
          data-cy="cy-filter-products-empty-link-add-product"
        >
          Add new product
        </NavLink>
      </div>
    </article>
  );
}
