import { Timestamp } from 'firebase/firestore';

export type Product = {
  idProduct: string;
  name: string;
  totalPurchases: number;
  lastPurchaseAt: Timestamp | null;
  nextPurchaseAt: Timestamp;
  createdAt: Timestamp;
};

export type FrequencyTimeToBuy = {
  id: string;
  value: 7 | 14 | 30;
  text: string;
  code: 'soon' | 'kind-of-soon' | 'not-soon';
};

export type StatusProduct = {
  id: string;
  text: string;
  code: 'soon' | 'kind-of-soon' | 'not-soon' | 'overdue' | 'inactive';
  levelUrgency: 1 | 2 | 3 | 4 | 5;
};

export type TagProductFilter = {
  key: string;
  value: string;
};
