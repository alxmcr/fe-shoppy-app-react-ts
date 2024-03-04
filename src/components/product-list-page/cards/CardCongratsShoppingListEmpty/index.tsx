import { NavLink } from 'react-router-dom';
import IconStar from '../../../atoms/icons-big/IconStar';
import './CardCongratsShoppingListEmpty.scss';

export default function CardCongratsShoppingListEmpty() {
  return (
    <article className="card-congrats-empty">
      <div className="card-congrats-empty__content">
        <IconStar />
        <h1
          className="card-congrats-empty__title"
          data-cy="cy-empty-list-title"
        >
          Congrats!
        </h1>
        <p
          className="card-congrats-empty__message"
          aria-label="Your shopping list is empty!"
          data-cy="cy-empty-list-message"
        >
          Your shopping list is empty!
        </p>
      </div>
      <div className="card-congrats-empty__actions">
        <NavLink
          to="/add-product"
          className="card-congrats-empty__navlink"
          data-cy="cy-empty-list-link-add-product"
        >
          Add new product
        </NavLink>
      </div>
    </article>
  );
}
