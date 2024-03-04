import { addDays } from 'date-fns';
import { serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast from 'react-hot-toast';
import { Product } from '../../../../@types/appTypes';
import { FirebaseDBProductServiceImpl } from '../../../../api/FirebaseProductServiceImpl';
import { FIREBASE_MAIN_SUBCOLLECTION } from '../../../../constants/constants-firebase';
import {
  getDaysForPreviousEstimate,
  getDaysSinceLastPurchase,
  getStatusProduct,
  shouldItStillPurchased,
} from '../../../../helpers/helpers-products';
import { calculateEstimate } from '../../../../helpers/helpers-tcl';
import { mapperProductToDocumentData } from '../../../../helpers/mappers-firebase';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import IconCircle from '../../../atoms/icons-medium/IconCircle';
import IconCircleCheck from '../../../atoms/icons-medium/IconCircleCheck';
import './ProductListItemContent.scss';

type ProductListItemContentProps = {
  product: Product;
};

export default function ProductListItemContent({
  product,
}: ProductListItemContentProps) {
  const { token } = React.useContext(TokenContext);
  const [isPurchased, setIsPurchased] = React.useState(false);
  const status = getStatusProduct(product);
  const namePurchasedClassname = isPurchased
    ? 'product-list-item-content__name product-list-item-content__name--purchased'
    : 'product-list-item-content__name';

  const onPurchaseProduct = async (productToPurchase: Product) => {
    if (productToPurchase === null) {
      throw new Error('Error. Product can not be purchased!');
    }

    setIsPurchased(true);

    const daysSinceLastPurchase = getDaysSinceLastPurchase(product);
    const daysPreviousEstimate = getDaysForPreviousEstimate(product);

    const daysEstimatedUntilNextPurchase = calculateEstimate(
      daysPreviousEstimate,
      daysSinceLastPurchase,
      productToPurchase?.totalPurchases,
    );

    const nextPurchasedEstimated = addDays(
      Date.now(),
      daysEstimatedUntilNextPurchase,
    );

    // update
    const fbProduct = mapperProductToDocumentData(productToPurchase);
    const service = new FirebaseDBProductServiceImpl();
    await service.updateProduct(
      token,
      FIREBASE_MAIN_SUBCOLLECTION,
      productToPurchase.idProduct,
      {
        ...fbProduct,
        pr_last_purchase_at: serverTimestamp(),
        pr_next_purchase_at: nextPurchasedEstimated,
        pr_total_purchases: productToPurchase?.totalPurchases + 1,
      },
    );

    // Toast
    toast.success(`Product ${productToPurchase.name} purchased!`);
  };

  const onChangeCheckbox = () => {
    onPurchaseProduct(product);
  };

  React.useEffect(() => {
    setIsPurchased(shouldItStillPurchased(product?.lastPurchaseAt));
  }, [product?.lastPurchaseAt]);

  return (
    <div className="product-list-item-content">
      <label
        htmlFor={`product-info-${product?.idProduct}`}
        className="product-list-item-content__label"
      >
        <input
          type="checkbox"
          className="product-list-item-content__checkbox"
          name={`product-info-${product?.idProduct}`}
          id={`product-info-${product?.idProduct}`}
          data-cy={`cy-product-info-${product?.idProduct}`}
          onChange={onChangeCheckbox}
          checked={isPurchased}
          disabled={isPurchased}
        />
        <span className="product-list-item-content__wrapper-check-icon">
          {isPurchased ? (
            <IconCircleCheck alt="Product purchased" />
          ) : (
            <IconCircle alt="Product purchased" />
          )}
        </span>
      </label>
      <span
        className={namePurchasedClassname}
        data-cy={`product-name-${product?.idProduct}`}
      >
        {product?.name}
      </span>
      <span
        className="product-list-item-content__tag-status"
        data-cy={`product-frequency-time-${product?.idProduct}`}
      >
        ({status.text})
      </span>
    </div>
  );
}
