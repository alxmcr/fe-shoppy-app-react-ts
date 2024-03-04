import { DocumentData, Query } from 'firebase/firestore';
import { Product } from '../@types/appTypes';
import { FbNewProduct } from '../@types/serviceTypes';

export interface IFirebaseDBProductService {
  isTokenValidToJoinList(tokenList: string): Promise<boolean>;
  isProductDuplicated(
    tokenList: string,
    pathSubcollection: string,
    productName: string,
  ): Promise<boolean>;
  createShoppingList(tokenGenerated: string): Promise<void>;
  queryFindAllProducts(tokenList: string, pathSubcollection: string): Query;
  addProduct(
    tokenList: string,
    pathSubcollection: string,
    formProduct: FbNewProduct,
  ): Promise<Product>;
  updateProduct(
    tokenList: string,
    pathSubcollection: string,
    pr_product: string,
    productUpdated: DocumentData,
  ): Promise<void>;
  deleteProduct(
    tokenList: string,
    pathSubcollection: string,
    pr_product: string,
  ): Promise<void>;
}
