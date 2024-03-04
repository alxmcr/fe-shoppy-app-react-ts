import React from 'react';

export type ProductFilterModalContextData = {
  showFilterProductModal: boolean;
  setShowFilterProductModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialProductFilterModalData: ProductFilterModalContextData = {
  showFilterProductModal: false,
  setShowFilterProductModal: () => {},
};

export const ProductFilterModalContext = React.createContext(
  initialProductFilterModalData,
);
