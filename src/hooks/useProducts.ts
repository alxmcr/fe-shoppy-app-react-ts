import { Unsubscribe } from 'firebase/app-check';
import { QuerySnapshot, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { Product } from '../@types/appTypes';
import { FirebaseDBProductServiceImpl } from '../api/FirebaseProductServiceImpl';
import { LoadingStates } from '../constants/constants-app';
import {
  FIREBASE_MAIN_COLLECTION,
  FIREBASE_MAIN_SUBCOLLECTION,
} from '../constants/constants-firebase';
import { mapperDocumentDataToProduct } from '../helpers/mappers-firebase';

export default function useProducts({ token = '' }) {
  const unsubscribeRef = React.useRef<Unsubscribe | null>(null);
  const [data, setData] = React.useState<Product[]>([]);
  const [statusProducts, setStatusProducts] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorProducts, setErrorProducts] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchProducts = () => {
      try {
        if (token.length > 0) {
          setStatusProducts(LoadingStates.PENDING);
          const service = new FirebaseDBProductServiceImpl(
            FIREBASE_MAIN_COLLECTION,
          );
          const productsQuery = service.queryFindAllProducts(
            token,
            FIREBASE_MAIN_SUBCOLLECTION,
          );

          const productsObserver = (snapshot: QuerySnapshot) => {
            const fbProducts: Product[] = [];
            snapshot.forEach((doc) => {
              const product = mapperDocumentDataToProduct(doc.id, doc.data());

              fbProducts.push(product);
            });
            setData(fbProducts);
            setStatusProducts(LoadingStates.SUCCESS);
            setErrorProducts(null);
          };

          const unsubscribe = onSnapshot(productsQuery, productsObserver);
          unsubscribeRef.current = unsubscribe;
        }
      } catch (error) {
        setStatusProducts(LoadingStates.ERROR);

        if (error instanceof Error) {
          setErrorProducts(error);
        }
      }
    };

    fetchProducts();

    return (): void => {
      // Clean up the subscription when the component unmounts
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [token]);

  return { data, statusProducts, errorProducts };
}
