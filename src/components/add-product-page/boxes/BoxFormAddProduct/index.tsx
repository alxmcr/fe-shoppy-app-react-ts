import React from 'react';
import { LoadingStates } from '../../../../constants/constants-app';
import FormAddProduct from '../../forms/FormAddProduct';
import './BoxFormAddProduct.scss';

export default function BoxFormAddProduct() {
  const [statusSavingProduct, setStatusSavingProduct] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorSavingProduct, setErrorSavingProduct] =
    React.useState<Error | null>(null);

  return (
    <article className="box-form-add-product">
      <FormAddProduct
        setStatusSavingProduct={setStatusSavingProduct}
        setErrorSavingProduct={setErrorSavingProduct}
      />
      {statusSavingProduct === LoadingStates.PENDING ? (
        <p className="box-form-add-product__message box-form-add-product__message--info">
          Saving new product...
        </p>
      ) : null}
      {statusSavingProduct === LoadingStates.ERROR ? (
        <p className="box-form-add-product__message box-form-add-product__message--error">
          {errorSavingProduct?.message}
        </p>
      ) : null}
      {statusSavingProduct === LoadingStates.SUCCESS ? (
        <p className="box-form-add-product__message box-form-add-product__message--success">
          Product saved successfully.
        </p>
      ) : null}
    </article>
  );
}
