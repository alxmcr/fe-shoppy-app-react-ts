import React from 'react';
import { FrequencyTimeToBuy, TagProductFilter } from '../../@types/appTypes';
import {
  ProductFilterConditionsContext,
  ProductFilterConditionsContextData,
} from './ProductFilterConditionsContext';

type ProductFilterConditionsProviderProps = {
  children: React.ReactNode;
};

export default function ProductFilterConditionsProvider({
  children,
}: ProductFilterConditionsProviderProps) {
  const [filterProductName, setFilterProductName] = React.useState('');
  const [filterProductFreqTime, setFilterProductFreqTime] =
    React.useState<FrequencyTimeToBuy | null>(null);
  const [filterProductTags, setFilterProductTags] = React.useState<
    TagProductFilter[]
  >([]);

  const value: ProductFilterConditionsContextData = {
    filterProductName,
    setFilterProductName,
    filterProductFreqTime,
    setFilterProductFreqTime,
    filterProductTags,
    setFilterProductTags,
  };

  return (
    <ProductFilterConditionsContext.Provider value={value}>
      {children}
    </ProductFilterConditionsContext.Provider>
  );
}
