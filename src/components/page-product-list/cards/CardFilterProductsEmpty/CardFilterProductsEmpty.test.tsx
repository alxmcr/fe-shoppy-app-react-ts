import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardFilterProductsEmpty from '.';
import { BrowserRouter } from 'react-router-dom';
import ProductFilterConditionsProvider from '../../../../providers/ProductFilterConditionsProvider';

describe('CardFilterProductsEmpty test', () => {
  test('renders correctly', () => {
    render(
      <ProductFilterConditionsProvider>
        <CardFilterProductsEmpty />
      </ProductFilterConditionsProvider>,
      { wrapper: BrowserRouter },
    );

    // UI Elements
    const title = screen.getByRole('heading', { name: 'No products found' });
    const message = screen.getByText('We are so sorry!');
    const btnResetFilter = screen.getByRole('button', { name: 'Reset filter' });
    const navLinkAddProduct = screen.getByRole('link', {
      name: 'Add new product',
    });

    // Assertions
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(btnResetFilter).toBeInTheDocument();
    expect(navLinkAddProduct).toBeInTheDocument();
  });
});
