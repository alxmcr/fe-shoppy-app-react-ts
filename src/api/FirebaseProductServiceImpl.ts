import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  DocumentData,
  Firestore,
  Query,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { Product } from '../@types/appTypes';
import { FbNewProduct, FbProduct } from '../@types/serviceTypes';
import { FIREBASE_MAIN_COLLECTION } from '../constants/constants-firebase';
import { mapperDocumentDataToProduct } from '../helpers/mappers-firebase';
import { IFirebaseDBProductService } from './IFirebaseProductService';

export class FirebaseDBProductServiceImpl implements IFirebaseDBProductService {
  private pathCollection: string;
  private db: Firestore;
  private firebaseConfig: FirebaseOptions;

  constructor(pathCollect = 'lists') {
    this.pathCollection = pathCollect;
    this.firebaseConfig = {
      apiKey: import.meta.env.VITE_FBBASE_API_KEY,
      authDomain: import.meta.env.VITE_FBBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FBBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FBBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FBBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FBBASE_APP_ID,
    };
    // Init app
    initializeApp(this.firebaseConfig);
    // Database Firestore
    this.db = getFirestore();
  }
  async deleteProduct(
    tokenList = '',
    pathSubcollection = '',
    pr_product: string,
  ): Promise<void> {
    if (pr_product.length === 0) {
      throw new Error('Product id invalid');
    }

    if (tokenList.length === 0) {
      throw new Error('DELETE. Token invalid!');
    }

    if (pathSubcollection.length === 0) {
      throw new Error('Path subcollection invalid');
    }

    const parentDocRef = doc(this.db, this.pathCollection, tokenList);
    const productDocRef = doc(parentDocRef, pathSubcollection, pr_product);

    await deleteDoc(productDocRef);
  }
  async isProductDuplicated(
    tokenList = '',
    pathSubcollection = '',
    productNameToCheck = '',
  ): Promise<boolean> {
    let result = false;

    if (tokenList.length === 0) {
      throw new Error('DUPLICATED: Token invalid!');
    }

    if (pathSubcollection.length === 0) {
      throw new Error('Path subcollection invalid');
    }

    const subcollectionRef = collection(
      this.db,
      this.pathCollection,
      tokenList,
      pathSubcollection,
    );

    const querySnapshot = await getDocs(subcollectionRef);
    querySnapshot.forEach((doc) => {
      const productData = doc.data() as FbProduct;
      const name = productData.pr_name?.toLowerCase().trim();

      if (name === productNameToCheck?.toLowerCase().trim()) {
        result = true;
        return;
      }
    });

    return result;
  }
  async updateProduct(
    tokenList: string,
    pathSubcollection: string,
    pr_product: string,
    productUpdated: DocumentData,
  ): Promise<void> {
    const parentDocRef = doc(this.db, this.pathCollection, tokenList);
    const productDocRef = doc(parentDocRef, pathSubcollection, pr_product);

    await updateDoc(productDocRef, { ...productUpdated });
  }
  async addProduct(
    tokenList: string,
    pathSubcollection: string,
    formProduct: FbNewProduct,
  ): Promise<Product> {
    const subcollectionRef = collection(
      this.db,
      this.pathCollection,
      tokenList,
      pathSubcollection,
    );

    const docRef = await addDoc(subcollectionRef, {
      ...formProduct,
      pr_created_at: serverTimestamp(),
    });

    return mapperDocumentDataToProduct(docRef.id, docRef);
  }
  async createShoppingList(tokenGenerated = ''): Promise<void> {
    if (tokenGenerated === '') {
      throw new Error(`This token generated invalid`);
    }

    await setDoc(doc(this.db, FIREBASE_MAIN_COLLECTION, tokenGenerated), {
      products: [],
    });
  }

  async isTokenValidToJoinList(tokenList: string): Promise<boolean> {
    if (tokenList === null || tokenList === undefined) {
      return false;
    }

    if (tokenList === '') {
      return false;
    }

    let result = false;

    const productListsSnapshot = await getDocs(
      collection(this.db, this.pathCollection),
    );

    productListsSnapshot.forEach((productList) => {
      const { id } = productList;

      if (id === tokenList) {
        result = true;
        return;
      }
    });

    return result;
  }

  queryFindAllProducts(tokenList = '', pathSubcollection = ''): Query {
    if (tokenList.length === 0) {
      throw new Error('LIST: Token invalid!');
    }

    if (pathSubcollection.length === 0) {
      throw new Error('Path subcollection invalid');
    }

    // <pathCollection>/<tokenList>/<pathSubcollection>
    const productsRef = collection(
      this.db,
      this.pathCollection,
      tokenList,
      pathSubcollection,
    );

    // Sometimes on Firebase is neccessary to create Firebase indexes
    return query(productsRef, orderBy('pr_name'));
  }
}
