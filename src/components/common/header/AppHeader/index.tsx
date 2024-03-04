import React from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { KEY_TOKEN } from '../../../../constants/constants-app';
import { ProductListRoute } from '../../../../constants/constants-routes';
import { ProductFilterModalContext } from '../../../../providers/ProductFilterModalProvider/ProductFilterModalContext';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import IconCopy from '../../../atoms/icons-medium/IconCopy';
import IconExit from '../../../atoms/icons-medium/IconExit';
import IconFilter from '../../../atoms/icons-medium/IconFilter';
import './AppHeader.scss';

type AppHeaderProps = {
  title: string;
  subtitle: string;
};

export default function AppHeader({
  title = '',
  subtitle = '',
}: AppHeaderProps) {
  const { token, setToken } = React.useContext(TokenContext);
  const { setShowFilterProductModal } = React.useContext(
    ProductFilterModalContext,
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onClickExit = () => {
    localStorage.removeItem(KEY_TOKEN);
    setToken('');
    navigate('/');
  };

  const onClickOpenFilterModal = () => {
    setShowFilterProductModal(true);
  };

  const onClickCopyToken = (tokenToCopy = '') => {
    navigator.clipboard.writeText(tokenToCopy).then(() => {
      toast.success('Token copied!');
    });
  };

  return (
    <header className="header">
      <div className="header__top">
        <h2
          className="header__subtitle"
          aria-label="header-subtitle"
          data-cy="cy-header-subtitle"
        >
          {subtitle}
        </h2>
        <div className="header__actions">
          {pathname === ProductListRoute.path ? (
            <button
              className="header__button"
              onClick={onClickOpenFilterModal}
              aria-label="Filter Products button"
              data-cy="cy-header-button-filter-products"
            >
              <IconFilter />
            </button>
          ) : null}
          <button
            className="header__button"
            onClick={onClickExit}
            aria-label="Sign out button"
            data-cy="cy-header-button-sign-out"
          >
            <IconExit />
          </button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom-wrapper">
          <div className="header__bottom-box">
            <h1
              className="header__title"
              data-cy="cy-header-token"
              aria-label="header-token"
            >
              {title}
            </h1>
          </div>
          {pathname === ProductListRoute.path ? (
            <div className="header__actions">
              <button
                className="header__button"
                onClick={() => onClickCopyToken(token)}
                aria-label="Copy token button"
                data-cy="cy-header-button-copy-token"
              >
                <IconCopy />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
