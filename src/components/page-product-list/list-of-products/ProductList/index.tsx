import React from 'react';
import CardCongratsShoppingListEmpty from '../../cards/CardCongratsShoppingListEmpty';
import CardFilterProductsEmpty from '../../cards/CardFilterProductsEmpty';
import ProductListItem from '../ProductListItem';
import './ProductList.scss';
import { Product } from '../../../../@types/appTypes';
import { ProductFilterConditionsContext } from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import { onFilterProductsByConditions } from '../../../../helpers/helpers-filter';

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products = [] }: ProductListProps) {
  const { filterProductName, filterProductFreqTime } = React.useContext(
    ProductFilterConditionsContext,
  );
  const productsFiltered = products.filter((product) =>
    onFilterProductsByConditions(product, {
      filterProductName,
      filterProductFreqTime,
    }),
  );

  if (products.length === 0) {
    return <CardCongratsShoppingListEmpty />;
  }

  if (productsFiltered.length > 0) {
    return (
      <ul
        className="product-list"
        aria-label="list-of-products"
        data-cy="list-of-all-products"
      >
        {productsFiltered.map((product, index) => (
          <ProductListItem product={product} key={index} />
        ))}
      </ul>
    );
  }
  return <CardFilterProductsEmpty />;
}
