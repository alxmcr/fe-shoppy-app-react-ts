import React from 'react';
import {
  ProductFilterModalContext,
  ProductFilterModalContextData,
} from './ProductFilterModalContext';

type ProductFilterModalProviderProps = {
  children: React.ReactNode;
};

export default function ProductFilterModalProvider({
  children,
}: ProductFilterModalProviderProps) {
  const [showFilterProductModal, setShowFilterProductModal] =
    React.useState(false);

  const value: ProductFilterModalContextData = {
    showFilterProductModal,
    setShowFilterProductModal,
  };

  return (
    <ProductFilterModalContext.Provider value={value}>
      {children}
    </ProductFilterModalContext.Provider>
  );
}
