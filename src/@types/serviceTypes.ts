import { Timestamp } from 'firebase/firestore';

export type FbProduct = {
  pr_product?: string;
  pr_name: string;
  pr_total_purchases: number;
  pr_last_purchase_at: Timestamp | null;
  pr_next_purchase_at: Timestamp;
  pr_created_at: Timestamp;
};

export type FbNewProduct = {
  pr_name: string;
  pr_total_purchases: number;
  pr_last_purchase_at: null;
  pr_next_purchase_at: Timestamp;
};
