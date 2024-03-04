import React from 'react';
import { FrequencyTimeToBuy, TagProductFilter } from '../../@types/appTypes';

export type ProductFilterConditions = {
  filterProductName: string;
  filterProductFreqTime: FrequencyTimeToBuy | null;
};

export type ProductFilterConditionsContextData = {
  filterProductName: string;
  setFilterProductName: React.Dispatch<React.SetStateAction<string>>;
  filterProductFreqTime: FrequencyTimeToBuy | null;
  setFilterProductFreqTime: React.Dispatch<
    React.SetStateAction<FrequencyTimeToBuy | null>
  >;
  filterProductTags: TagProductFilter[];
  setFilterProductTags: React.Dispatch<
    React.SetStateAction<TagProductFilter[]>
  >;
};

const initialProductFilterConditions: ProductFilterConditionsContextData = {
  filterProductName: '',
  setFilterProductName: () => {},
  filterProductFreqTime: null,
  setFilterProductFreqTime: () => {},
  filterProductTags: [],
  setFilterProductTags: () => {},
};

export const ProductFilterConditionsContext = React.createContext(
  initialProductFilterConditions,
);
