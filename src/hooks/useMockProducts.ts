import React from 'react';
import { Product } from '../@types/appTypes';
import { LoadingStates } from '../constants/constants-app';

export default function useMockProducts({ token = '' }) {
  console.log("🚀 ~ useMockProducts ~ token:", token)
  const [products, setProducts] = React.useState<Product[]>([]);
  const [statusProducts, setStatusProducts] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorProducts, setErrorProducts] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setStatusProducts(LoadingStates.PENDING);
        const response = await fetch('./mocks/firebase-products.json');

        const productsData = await response.json();

        setProducts(productsData);
        setStatusProducts(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusProducts(LoadingStates.ERROR);

        if (error instanceof Error) {
          console.error('Error fetching Products:', error);
          setErrorProducts(error);
        }
      }
    };

    fetchProducts();
  }, []);

  return { products, statusProducts, errorProducts };
}
