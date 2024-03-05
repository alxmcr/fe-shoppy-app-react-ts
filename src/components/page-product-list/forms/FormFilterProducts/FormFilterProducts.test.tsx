import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormFilterProducts from '.';
import { SOON } from '../../../../constants/constants-products';

describe('FormFilterProducts test', () => {
  test('renders correctly', () => {
    const applyProductFilter = jest.fn();
    const resetProductFilter = jest.fn();

    render(
      <FormFilterProducts
        applyProductFilter={applyProductFilter}
        resetProductFilter={resetProductFilter}
      />,
    );

    // UI elements
    const formFilterProduct = screen.getByRole('form', {
      name: 'Form filter product',
    });

    const inputName = screen.getByRole('textbox', {
      name: 'Filter product name',
    });
    // Soon - Input Radio
    const inputRadioButtonSoon = screen.getByRole('radio', {
      name: SOON.text,
    });
    const btnApplyFilter = screen.getByRole('button', { name: 'Apply filter' });
    const btnResetFilter = screen.getByRole('button', { name: 'Reset filter' });

    // Assertions
    expect(formFilterProduct).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputRadioButtonSoon).toBeInTheDocument();
    expect(btnApplyFilter).toBeInTheDocument();
    expect(btnResetFilter).toBeInTheDocument();
  });
});
