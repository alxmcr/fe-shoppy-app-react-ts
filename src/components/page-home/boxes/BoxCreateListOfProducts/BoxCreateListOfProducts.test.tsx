import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BoxCreateListOfProducts from '.';

describe('BoxCreateListOfProducts test', () => {
  test('renders correctly', () => {
    render(<BoxCreateListOfProducts />, { wrapper: BrowserRouter });

    // UI elements
    const btnCreateList = screen.getByRole('button', {
      name: 'Create a new shopping list',
    });

    // assertions
    expect(btnCreateList).toBeInTheDocument();
  });
});
