import { differenceInDays } from 'date-fns';
import { Timestamp } from 'firebase/firestore';
import { Product, StatusProduct } from '../@types/appTypes';
import {
  DEFAULT_DAYS_PREVIOUS_ESTIMATED,
  STATUS_INACTIVE,
  STATUS_KIND_OF_SOON,
  STATUS_NOT_SOON,
  STATUS_OVERDUE,
  STATUS_SOON,
} from '../constants/constants-products';
import { hasPassed24Hours } from './helpers-timestamps';

export const getDaysSinceLastPurchase = (product: Product) => {
  if (product === null || product === undefined) {
    return 0;
  }

  const currentTime = Date.now();
  const { totalPurchases, createdAt, lastPurchaseAt } = product;

  if (totalPurchases < 2) {
    return differenceInDays(currentTime, createdAt?.toDate());
  }

  if (lastPurchaseAt !== null && lastPurchaseAt !== undefined) {
    return differenceInDays(currentTime, lastPurchaseAt?.toDate());
  }

  return 0;
};

export const getDaysForPreviousEstimate = (product: Product) => {
  if (product === null || product === undefined) {
    return 0;
  }

  const { totalPurchases, lastPurchaseAt, nextPurchaseAt } = product;

  if (
    totalPurchases < 2 ||
    lastPurchaseAt === null ||
    lastPurchaseAt === undefined
  ) {
    return DEFAULT_DAYS_PREVIOUS_ESTIMATED;
  }

  return differenceInDays(nextPurchaseAt.toDate(), lastPurchaseAt.toDate());
};

export const isProductInactive = (product: Product) => {
  if (product === null || product === undefined) {
    return false;
  }

  const diffDays = getDaysSinceLastPurchase(product);

  return diffDays > 60;
};
export const isProductOverdue = (product: Product) => {
  if (product === null || product === undefined) {
    return false;
  }

  if (product.nextPurchaseAt !== null && product.nextPurchaseAt !== undefined) {
    const diffDays = differenceInDays(
      product.nextPurchaseAt.toDate(),
      Date.now(),
    );

    return diffDays === 1;
  }

  return false;
};

export const getStatusProductByFreqTime = (product: Product): StatusProduct => {
  if (product === null || product === undefined) {
    throw new Error('Product invalid!');
  }

  if (product.nextPurchaseAt !== null && product.nextPurchaseAt !== undefined) {
    const diffDays = differenceInDays(
      product.nextPurchaseAt.toDate(),
      Date.now(),
    );

    if (diffDays >= 0 && diffDays <= 7) {
      return STATUS_SOON;
    } else if (diffDays > 7 && diffDays < 30) {
      return STATUS_KIND_OF_SOON;
    }
  }

  return STATUS_NOT_SOON;
};

export const getStatusProduct = (product: Product): StatusProduct => {
  if (product === null || product === undefined) {
    throw new Error('Product invalid!');
  }

  if (isProductInactive(product)) {
    return STATUS_INACTIVE;
  }

  if (isProductOverdue(product)) {
    return STATUS_OVERDUE;
  }

  return getStatusProductByFreqTime(product);
};

export const shouldItStillPurchased = (lastPurchaseAt: Timestamp | null) => {
  if (lastPurchaseAt === null || lastPurchaseAt === undefined) {
    return false;
  }

  const hasPassed = hasPassed24Hours(lastPurchaseAt);

  return hasPassed ? false : true;
};

export const sortProductsByStatusPurchase = (
  productA: Product,
  productB: Product,
) => {
  const productStatusA = getStatusProduct(productA);
  const productStatusB = getStatusProduct(productB);

  if (productStatusA.levelUrgency < productStatusB.levelUrgency) {
    return -1;
  } else if (productStatusA.levelUrgency > productStatusB.levelUrgency) {
    return 1;
  } else {
    return 0;
  }
};
