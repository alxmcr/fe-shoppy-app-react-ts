import { NavLink } from 'react-router-dom';
import IconInfo from '../../../atoms/icons-big/IconInfo';
import './CardFilterProductsEmpty.scss';

export default function CardFilterProductsEmpty() {
  const onClickResetFilter = () => {
    console.log('reset filter');
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
