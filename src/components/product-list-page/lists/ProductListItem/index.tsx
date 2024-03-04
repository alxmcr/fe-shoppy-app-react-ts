import { Product } from '../../../../@types/appTypes';
import { getStatusProduct } from '../../../../helpers/helpers-products';
import ProductListItemActions from '../ProductListItemActions';
import ProductListItemContent from '../ProductListItemContent';
import './ProductListItem.scss';

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  const productStatus = getStatusProduct(product);
  const productClassname = productStatus.code
    ? `product-list-item product-list-item--${productStatus.code}`
    : 'product-list-item';

  return (
    <li
      className={productClassname}
      id={product?.idProduct}
      data-cy={`product-list-item-${product?.idProduct}`}
    >
      <ProductListItemContent product={product} />
      <ProductListItemActions product={product} />
    </li>
  );
}
