import React from 'react';
import FooterNavigation from '../../components/common/footer/FooterNavigation';
import AppHeader from '../../components/common/header/AppHeader';
import SectionProductList from '../../components/product-list-page/sections/SectionProductList';
import ProductListProviders from '../../providers/ProductListProviders';
import { TokenContext } from '../../providers/TokenProvider/TokenContext';
import './ProductListPage.scss';

export default function ProductListPage() {
  const { token } = React.useContext(TokenContext);

  return (
    <ProductListProviders>
      <div className="product-list-page">
        <AppHeader title={token} subtitle="Your shopping list" />
        <SectionProductList />
        <FooterNavigation />
      </div>
    </ProductListProviders>
  );
}
