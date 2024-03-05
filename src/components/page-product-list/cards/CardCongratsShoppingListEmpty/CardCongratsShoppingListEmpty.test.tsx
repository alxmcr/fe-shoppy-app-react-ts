import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardCongratsShoppingListEmpty from '.';
import ProductFilterConditionsProvider from '../../../../providers/ProductFilterConditionsProvider';
import ProductFilterModalProvider from '../../../../providers/ProductFilterModalProvider';

describe('CardCongratsShoppingListEmpty test', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <ProductFilterConditionsProvider>
          <ProductFilterModalProvider>
            <CardCongratsShoppingListEmpty />
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
});
