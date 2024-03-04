import { NavLink } from 'react-router-dom';
import IconCart from '../../../atoms/icons-medium/IconCart';
import IconCirclePlus from '../../../atoms/icons-medium/IconCirclePlus';
import './AppNavigation.scss';

export default function AppNavigation() {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list-links">
        <li className="app-navigation__list-item">
          <NavLink
            to="/list"
            aria-label="Shopping list navigation link"
            data-cy="navlink-shopping-list"
            className={({ isActive }) =>
              isActive
                ? 'app-navigation__link app-navigation__link--active'
                : 'app-navigation__link'
            }
          >
            <IconCart />
          </NavLink>
        </li>
        <li className="app-navigation__list-item">
          <NavLink
            to="/add-product"
            aria-label="Add product navigation link"
            data-cy="navlink-add-item"
            className={({ isActive }) =>
              isActive
                ? 'app-navigation__link app-navigation__link--active'
                : 'app-navigation__link'
            }
          >
            <IconCirclePlus />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
