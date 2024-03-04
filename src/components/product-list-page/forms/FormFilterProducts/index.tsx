import React from 'react';
import {
  FrequencyTimeToBuy,
  TagProductFilter,
} from '../../../../@types/appTypes';
import { FILTER_KEYS } from '../../../../constants/constants-app';
import { FREQ_TIMES_TO_BUY } from '../../../../constants/constants-products';
import {
  ProductFilterConditions,
  ProductFilterConditionsContext,
} from '../../../../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import GroupRadioButtonsFreqTime from '../../../common/inputs/GroupRadioButtonsFreqTime';
import './FormFilterProducts.scss';

type FormfilterProductsProps = {
  applyProductFilter: (filterConditions: ProductFilterConditions) => void;
  resetProductFilter: () => void;
};

export default function FormFilterProducts({
  applyProductFilter,
  resetProductFilter,
}: FormfilterProductsProps) {
  const [productName, setProductName] = React.useState('');
  const [freqTime, setFreqTime] = React.useState<FrequencyTimeToBuy | null>(
    null,
  );
  const {
    setFilterProductName,
    setFilterProductFreqTime,
    setFilterProductTags,
  } = React.useContext(ProductFilterConditionsContext);

  const onChangeFilterProductName = (
    ev: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProductName(ev.target.value);
  };

  const onSelectFilterFreqTime = (freqTimeSelected: FrequencyTimeToBuy) => {
    setFreqTime(freqTimeSelected);
  };

  const onClickApplyFilter = (ev: React.FormEvent) => {
    ev.preventDefault();

    const filterTags: TagProductFilter[] = [];

    if (productName !== '') {
      filterTags.push({ key: FILTER_KEYS.NAME, value: productName });
    }

    if (freqTime !== null) {
      filterTags.push({ key: FILTER_KEYS.FREQ_TIME, value: freqTime.text });
    }
    setFilterProductTags(filterTags);

    // Filter conditions
    const filter: ProductFilterConditions = {
      filterProductName: productName,
      filterProductFreqTime: freqTime,
    };

    setFilterProductName(productName);
    setFilterProductFreqTime(freqTime);

    applyProductFilter(filter);
  };

  const onClickResetFilter = () => {
    setProductName('');
    setFreqTime(null);

    resetProductFilter();
  };

  return (
    <form
      className="form-filter-products"
      onSubmit={onClickApplyFilter}
      onReset={onClickResetFilter}
      aria-label="Form filter product"
      data-cy="cy-form-filter-product"
    >
      <label
        htmlFor="product-name"
        className="form-filter-products__label"
        data-cy="cy-filter-label-product-name"
      >
        <span className="form-filter-products__text">Filter product name</span>
        <input
          type="text"
          id="product-name"
          name="product-name"
          className="form-filter-products__input"
          value={productName}
          onChange={onChangeFilterProductName}
          placeholder="Start typing here..."
          data-cy="cy-filter-input-product-name"
          autoComplete="off"
        />
      </label>
      <fieldset className="form-add-product__fieldset">
        <legend
          className="form-add-product__legend"
          data-cy="cy-group-radio-legend"
        >
          Days estimated for next purchased
        </legend>
        <GroupRadioButtonsFreqTime
          frequencyTimes={FREQ_TIMES_TO_BUY}
          groupId="frequency_radio_button"
          freqTime={freqTime}
          onSelectFreqTime={onSelectFilterFreqTime}
        />
      </fieldset>
      <div className="form-filter-products__actions">
        <button
          type="submit"
          className="form-filter-products__button"
          data-cy="cy-filter-btn-apply-filter"
        >
          Apply filter
        </button>
        <button
          type="reset"
          className="form-filter-products__button"
          data-cy="cy-filter-btn-reset-filter"
        >
          Reset filter
        </button>
      </div>
    </form>
  );
}
