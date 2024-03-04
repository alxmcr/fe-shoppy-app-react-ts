import React from 'react';
import {
  ProductFilterConditions,
  ProductFilterConditionsContext,
} from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import { ProductFilterModalContext } from '../../../../providers/ProductFilterModalProvider/ProductFilterModalContext';
import ModalContainer from '../../../common/modals/ModalContainer';
import ModalProductFilter from '../ModalProductFilter';

export default function WrapperModalProductFilter() {
  const { showFilterProductModal, setShowFilterProductModal } =
    React.useContext(ProductFilterModalContext);
  const {
    setFilterProductName,
    setFilterProductFreqTime,
    setFilterProductTags,
  } = React.useContext(ProductFilterConditionsContext);

  const applyProductFilter = (filterConditions: ProductFilterConditions) => {
    setFilterProductName(filterConditions.filterProductName);
    setFilterProductFreqTime(filterConditions.filterProductFreqTime);
    // modal
    setShowFilterProductModal(false);
  };

  const resetProductFilter = () => {
    setFilterProductName('');
    setFilterProductFreqTime(null);
    // Filter tags
    setFilterProductTags([]);
  };

  const onClickCloseModal = () => {
    setShowFilterProductModal(false);
  };

  if (showFilterProductModal) {
    return (
      <ModalContainer>
        <ModalProductFilter
          onCloseModal={onClickCloseModal}
          applyProductFilter={applyProductFilter}
          resetProductFilter={resetProductFilter}
        />
      </ModalContainer>
    );
  }
  return null;
}
