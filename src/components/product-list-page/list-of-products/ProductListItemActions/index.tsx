import React from 'react';
import toast from 'react-hot-toast';
import { Product } from '../../../../@types/appTypes';
import { FirebaseDBProductServiceImpl } from '../../../../api/FirebaseProductServiceImpl';
import { FIREBASE_MAIN_SUBCOLLECTION } from '../../../../constants/constants-firebase';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import IconCross from '../../../atoms/icons-medium/IconCross';
import './ProductListItemActions.scss';

type ProductListItemActionsProps = {
  product: Product;
};

export default function ProductListItemActions({
  product,
}: ProductListItemActionsProps) {
  const { token } = React.useContext(TokenContext);

  const onClickDeleteProduct = async (id = '') => {
    if (window.confirm('Do you want to delete it?')) {
      const service = new FirebaseDBProductServiceImpl();
      await service.deleteProduct(token, FIREBASE_MAIN_SUBCOLLECTION, id);
      // Toast
      toast.success('Product deleted!');
    }
  };

  if (product === null || product === undefined) return null;

  return (
    <div className="product-list-item-actions">
      <button
        onClick={() => onClickDeleteProduct(product.idProduct)}
        className="product-list-item-actions__button"
        aria-label="Delete product button"
        data-cy={`button-product-item-${product.idProduct}`}
      >
        <IconCross />
      </button>
    </div>
  );
}
