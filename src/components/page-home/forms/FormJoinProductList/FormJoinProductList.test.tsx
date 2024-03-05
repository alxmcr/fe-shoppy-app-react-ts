import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormJoinProductList from '.';
import { BrowserRouter } from 'react-router-dom';

describe('FormJoinProductList test', () => {
  test('renders correctly', () => {
    const onJoinProductList = jest.fn();
    const resetStateJoinList = jest.fn();

    render(
      <FormJoinProductList
        onJoinProductList={onJoinProductList}
        resetStateJoinList={resetStateJoinList}
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    // UI elements
    const labelToken = screen.getByLabelText('Join an existing list');
    const inputProductName = screen.getByRole('textbox', {
      name: 'Join an existing list',
    });
    const btnJoinList = screen.getByRole('button', {
      name: 'Join product list button',
    });

    // assertions
    expect(labelToken).toBeInTheDocument();
    expect(inputProductName).toBeInTheDocument();
    expect(btnJoinList).toBeInTheDocument();
  });
});
