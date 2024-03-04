import { ProductFilterConditions } from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import IconCircleCross from '../../../@atoms/icons-medium/IconCircleCross';
import FormFilterProducts from '../../forms/FormFilterProducts';
import './ModalProductFilter.scss';

type ModalProductFilterProps = {
  onCloseModal: () => void;
  applyProductFilter: (filterConditions: ProductFilterConditions) => void;
  resetProductFilter: () => void;
};

export default function ModalProductFilter({
  onCloseModal,
  applyProductFilter,
  resetProductFilter,
}: ModalProductFilterProps) {
  return (
    <article className="modal-product-filter">
      <header className="modal-product-filter__header">
        <h3 className="modal-product-filter__title">Filter products</h3>
        <button
          className="modal-product-filter__btn-close"
          onClick={onCloseModal}
          aria-label="Close modal"
          data-cy="btn-close-modal"
        >
          <IconCircleCross />
        </button>
      </header>
      <FormFilterProducts
        applyProductFilter={applyProductFilter}
        resetProductFilter={resetProductFilter}
      />
    </article>
  );
}
