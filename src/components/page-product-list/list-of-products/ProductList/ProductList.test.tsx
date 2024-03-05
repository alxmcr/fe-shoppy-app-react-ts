import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '.';
import { mockProductsWithThreeProducts } from '../../../../mockData/generateProductsMock';
import ProductFilterConditionsProvider from '../../../../providers/ProductFilterConditionsProvider';
import ProductFilterModalProvider from '../../../../providers/ProductFilterModalProvider';

describe('ProductList test', () => {
  test('renders correctly, empty message', () => {
    render(
      <BrowserRouter>
        <ProductFilterConditionsProvider>
          <ProductFilterModalProvider>
            <ProductList products={[]} />
          </ProductFilterModalProvider>
        </ProductFilterConditionsProvider>
        ,
      </BrowserRouter>,
    );

    // Ui Elements: Card empty
    const titleCard = screen.getByRole('heading', { name: 'Congrats!' });
    const message = screen.getByText('Your shopping list is empty!');
    const linkAddProduct = screen.getByRole('link', {
      name: 'Add new product',
    });

    // Assertions: Card empty
    expect(titleCard).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(linkAddProduct).toBeInTheDocument();
  });

  test('renders correctly, list with three products', () => {
    render(
      <BrowserRouter>
        <ProductFilterConditionsProvider>
          <ProductFilterModalProvider>
            <ProductList products={mockProductsWithThreeProducts} />
          </ProductFilterModalProvider>
        </ProductFilterConditionsProvider>
        ,
      </BrowserRouter>,
    );

    // Ui Elements
    const list = screen.getByRole('list');
    const products = screen.getAllByRole('listitem');

    // Assertions: Card empty
    expect(list).toBeInTheDocument();
    expect(products).toHaveLength(mockProductsWithThreeProducts.length);
  });
});
