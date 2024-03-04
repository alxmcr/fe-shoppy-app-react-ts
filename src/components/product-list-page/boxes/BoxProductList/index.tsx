import React from 'react';
import { LoadingStates } from '../../../../constants/constants-app';
import { sortProductsByStatusPurchase } from '../../../../helpers/helpers-products';
import useProducts from '../../../../hooks/useProducts';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import CardProductListError from '../../cards/CardProductListError';
import CardProductListLoading from '../../cards/CardProductListLoading';
import ProductList from '../../lists/ProductList';
import './BoxProductList.scss';

export default function BoxProductList() {
  const { token } = React.useContext(TokenContext);
  const { data, statusProducts, errorProducts } = useProducts({ token });

  if (LoadingStates.PENDING === statusProducts) {
    return (
      <div className="box-product-list">
        <CardProductListLoading />
      </div>
    );
  }

  if (LoadingStates.ERROR === statusProducts && errorProducts !== null) {
    return (
      <div className="box-product-list">
        <CardProductListError errorProducts={errorProducts} />
      </div>
    );
  }

  if (LoadingStates.SUCCESS === statusProducts && errorProducts === null) {
    return (
      <div className="box-product-list">
        <ProductList products={data.sort(sortProductsByStatusPurchase)} />
      </div>
    );
  }
}
