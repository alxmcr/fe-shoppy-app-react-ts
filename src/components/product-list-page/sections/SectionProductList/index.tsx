import React from 'react';
import {
  ProductFilterConditions,
  ProductFilterConditionsContext,
} from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import { ProductFilterModalContext } from '../../../../providers/ProductFilterModalProvider/ProductFilterModalContext';
import BoxProductFilterTags from '../../boxes/BoxProductFilterTags';
import BoxProductList from '../../boxes/BoxProductList';
import './SectionProductList.scss';
import ModalContainer from '../../../common/modals/ModalContainer';

export default function SectionProductList() {
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

  return (
    <section className="section-product-list">
      <BoxProductFilterTags />
      <BoxProductList />
      {showFilterProductModal ? (
        <ModalContainer>
          <ModalProductFilter
            onCloseModal={onClickCloseModal}
            applyProductFilter={applyProductFilter}
            resetProductFilter={resetProductFilter}
          />
        </ModalContainer>
      ) : null}
    </section>
  );
}
