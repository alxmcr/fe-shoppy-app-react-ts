import { DocumentData } from 'firebase/firestore';
import { Product } from '../@types/appTypes';
import { FbProduct } from '../@types/serviceTypes';

export const mapperDocumentDataToProduct = (
  pr_product = '',
  doc: DocumentData,
): Product => {
  const {
    pr_name,
    pr_created_at,
    pr_next_purchase_at,
    pr_last_purchase_at,
    pr_total_purchases,
  } = doc;

  return {
    idProduct: pr_product,
    name: pr_name,
    totalPurchases: pr_total_purchases,
    lastPurchaseAt: pr_last_purchase_at,
    nextPurchaseAt: pr_next_purchase_at,
    createdAt: pr_created_at,
  };
};

export const mapperProductToDocumentData = (product: Product): DocumentData => {
  const { name, createdAt, nextPurchaseAt, totalPurchases, lastPurchaseAt } =
    product;

  const fbProduct: FbProduct = {
    pr_name: name,
    pr_created_at: createdAt,
    pr_total_purchases: totalPurchases,
    pr_last_purchase_at: lastPurchaseAt,
    pr_next_purchase_at: nextPurchaseAt,
  };

  return fbProduct;
};
