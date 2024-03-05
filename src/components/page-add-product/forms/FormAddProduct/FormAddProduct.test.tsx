import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import FormAddProduct from '.';
import { SOON } from '../../../../constants/constants-products';

describe('FormAddProduct test', () => {
  test('renders correctly', () => {
    const setErrorSavingProduct = jest.fn();
    const setStatusSavingProduct = jest.fn();

    render(
      <FormAddProduct
        setErrorSavingProduct={setErrorSavingProduct}
        setStatusSavingProduct={setStatusSavingProduct}
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    // UI elements
    const formAddProduct = screen.getByRole('form', {
      name: 'Form add product',
    });
    const labelProductName = screen.getByLabelText('Product name');
    const inputProductName = screen.getByRole('textbox', {
      name: 'Product name',
    });

    // Soon - Input Radio
    const labelFreqTimeSoon = screen.getByLabelText(SOON.text);
    const inputRadioButtonSoon = screen.getByRole('radio', {
      name: SOON.text,
    });

    // Button
    const btnSaveItem = screen.getByRole('button', {
      name: 'Save item',
    });

    // assertions
    expect(formAddProduct).toBeInTheDocument();
    expect(labelProductName).toBeInTheDocument();
    expect(inputProductName).toBeInTheDocument();
    // Soon - Input Radio
    expect(labelFreqTimeSoon).toBeInTheDocument();
    expect(inputRadioButtonSoon).toBeInTheDocument();
    expect(inputRadioButtonSoon).not.toBeChecked();
    // Button
    expect(btnSaveItem).toBeInTheDocument();
  });

  test('user interacting with the form', async () => {
    const user = userEvent.setup();

    const PRODUCT_NAME = 'Orange';
    const setErrorSavingProduct = jest.fn();
    const setStatusSavingProduct = jest.fn();

    render(
      <FormAddProduct
        setErrorSavingProduct={setErrorSavingProduct}
        setStatusSavingProduct={setStatusSavingProduct}
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    // UI elements
    const formAddProduct = screen.getByRole('form', {
      name: 'Form add product',
    });
    const inputProductName = screen.getByRole('textbox', {
      name: 'Product name',
    });

    // Soon - Input Radio
    const inputRadioButtonSoon = screen.getByRole('radio', {
      name: SOON.text,
    });

    const btnSaveItem = screen.getByRole('button', { name: 'Save item' });

    // user interactions
    await user.type(inputProductName, PRODUCT_NAME);
    await user.click(inputRadioButtonSoon);

    // Asserts
    expect(formAddProduct).toBeInTheDocument();
    expect(inputProductName).toHaveValue(PRODUCT_NAME);
    expect(inputRadioButtonSoon).toBeChecked();
    expect(formAddProduct).toHaveFormValues({
      'product-name': PRODUCT_NAME,
      frequency_radio_button: SOON.value.toString(),
    });
    expect(btnSaveItem).toBeInTheDocument();
  });
});
