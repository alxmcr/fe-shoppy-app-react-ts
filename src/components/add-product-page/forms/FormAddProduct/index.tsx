import { addDays } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import { FrequencyTimeToBuy } from '../../../../@types/appTypes';
import { FbNewProduct } from '../../../../@types/serviceTypes';
import { FirebaseDBProductServiceImpl } from '../../../../api/FirebaseProductServiceImpl';
import { LoadingStates } from '../../../../constants/constants-app';
import { FIREBASE_MAIN_SUBCOLLECTION } from '../../../../constants/constants-firebase';
import { FREQ_TIMES_TO_BUY } from '../../../../constants/constants-products';
import { dateToTimestamp } from '../../../../helpers/helpers-timestamps';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import GroupRadioButtonsFreqTime from '../../../common/inputs/GroupRadioButtonsFreqTime';
import './FormAddProduct.scss';

type FormAddProductProps = {
  setStatusSavingProduct: React.Dispatch<React.SetStateAction<string>>;
  setErrorSavingProduct: React.Dispatch<React.SetStateAction<Error | null>>;
};

export default function FormAddProduct({
  setStatusSavingProduct,
  setErrorSavingProduct,
}: FormAddProductProps) {
  const { token } = React.useContext(TokenContext);
  const [productName, setProductName] = React.useState('');
  const [freqTime, setFreqTime] = React.useState<FrequencyTimeToBuy | null>(
    null,
  );

  const onChangeProductName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(ev.target.value);
    // Reset status
    setStatusSavingProduct(LoadingStates.IDLE);
  };

  const onSelectFreqTime = (freqTimeSelected: FrequencyTimeToBuy) => {
    setFreqTime(freqTimeSelected);
    // Reset status
    setStatusSavingProduct(LoadingStates.IDLE);
  };

  const onSubmitFormAddProduct = async (
    ev: React.FormEvent<HTMLFormElement>,
  ) => {
    ev.preventDefault();

    const frequencyOnDaysSelected = FREQ_TIMES_TO_BUY.find(
      (frequency) => frequency.id === freqTime?.id,
    );

    const nextPurchaseAt = addDays(
      Date.now(),
      frequencyOnDaysSelected?.value || 0,
    );

    const formProduct: FbNewProduct = {
      pr_name: productName,
      pr_total_purchases: 0,
      pr_last_purchase_at: null,
      pr_next_purchase_at: dateToTimestamp(nextPurchaseAt),
    };

    try {
      if (productName?.length === 0) {
        throw new Error('Error. Product name is empty');
      }

      setStatusSavingProduct(LoadingStates.PENDING);

      const service = new FirebaseDBProductServiceImpl();
      const isDuplicated = await service.isProductDuplicated(
        token,
        FIREBASE_MAIN_SUBCOLLECTION,
        productName,
      );

      if (isDuplicated) {
        throw new Error('Error. Product name is duplicated');
      }

      await service.addProduct(token, FIREBASE_MAIN_SUBCOLLECTION, formProduct);

      // Status
      setStatusSavingProduct(LoadingStates.SUCCESS);
      // Toast
      toast.success('Product created');
      // Reset form values
      setProductName('');
      setFreqTime(null);
    } catch (error) {
      setStatusSavingProduct(LoadingStates.ERROR);

      if (error instanceof Error) {
        setErrorSavingProduct(error);
        // Toast
        toast.error(error.message);
      }
    }
  };

  const onResetFormAddProduct = () => {
    setProductName('');
    setFreqTime(null);
  };

  return (
    <form
      className="form-add-product"
      onSubmit={onSubmitFormAddProduct}
      onReset={onResetFormAddProduct}
      name="Form add product"
      aria-label="Form add product"
      data-cy="cy-form-add-product"
    >
      <label
        htmlFor="product-name"
        className="form-add-product__label"
        data-cy="form-add-product-label-name"
      >
        <span className="form-add-product__text">Product name</span>
        <input
          type="text"
          className="form-add-product__input"
          id="product-name"
          name="product-name"
          placeholder="Enter a name"
          value={productName}
          onChange={onChangeProductName}
          data-cy="form-add-product-input-name"
          required
        />
      </label>
      <fieldset className="form-add-product__fieldset">
        <legend
          className="form-add-product__legend"
          data-cy="group-radio-legend"
        >
          How soon will you buy this again?
        </legend>
        <GroupRadioButtonsFreqTime
          frequencyTimes={FREQ_TIMES_TO_BUY}
          groupId="frequency_radio_button"
          freqTime={freqTime}
          onSelectFreqTime={onSelectFreqTime}
        />
      </fieldset>
      <div className="form-add-product__actions">
        <button
          type="submit"
          className="form-add-product__button"
          data-cy="button-save-item"
        >
          Save item
        </button>
      </div>
    </form>
  );
}
