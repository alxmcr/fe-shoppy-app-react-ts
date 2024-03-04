import { Timestamp } from 'firebase/firestore';
import { Product } from '../@types/appTypes';

// CreatedAt
const createdAtDate001 = new Date(2023, 11, 22, 12, 56, 0);
const createdAtDate002 = new Date(2023, 11, 23, 12, 56, 0);
// LastPurchaseAt
const lastPurchaseAtDate001 = new Date(2024, 1, 22, 12, 56, 0);
const lastPurchaseAtDate002 = new Date(2024, 1, 10, 12, 56, 0);
// NextPurchaseAt
const nextPurchaseAtDate001 = new Date(2024, 2, 14, 12, 56, 0);
const nextPurchaseAtDate002 = new Date(2024, 2, 19, 12, 56, 0);

// Products
export const productPurchased001: Product = {
  idProduct: 'uC1ENvSKcktpbthSttGb',
  name: 'candy',
  createdAt: Timestamp.fromDate(createdAtDate001),
  totalPurchases: 2,
  lastPurchaseAt: Timestamp.fromDate(lastPurchaseAtDate001),
  nextPurchaseAt: Timestamp.fromDate(nextPurchaseAtDate001),
};

export const productPurchasedSometimeAgo002: Product = {
  idProduct: 'Y0v3N5XpCJ570jTY7Mrh',
  name: 'apple',
  createdAt: Timestamp.fromDate(createdAtDate002),
  totalPurchases: 3,
  lastPurchaseAt: null,
  nextPurchaseAt: Timestamp.fromDate(nextPurchaseAtDate002),
};

export const product003: Product = {
  idProduct: 'j23k1N5XpCJ570jTY7Mrh',
  name: 'banana',
  createdAt: Timestamp.fromDate(createdAtDate001),
  totalPurchases: 3,
  lastPurchaseAt: Timestamp.fromDate(lastPurchaseAtDate002),
  nextPurchaseAt: Timestamp.fromDate(nextPurchaseAtDate002),
};

// Product list
export const mockProductsWithThreeProducts: Product[] = [
  productPurchased001,
  productPurchasedSometimeAgo002,
  product003,
];
