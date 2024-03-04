import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppHeader from '.';

describe('AppHeader test', () => {
  test('renders correctly', () => {
    const TOKEN = 'vital cling flare';
    const subtitleText = 'Your shopping list';

    render(
      <MemoryRouter initialEntries={['/list']}>
        <AppHeader title={TOKEN} subtitle={subtitleText} />
      </MemoryRouter>,
    );

    // Ui elements
    const token = screen.getByRole('heading', { name: 'header-token' });
    const subtitle = screen.getByRole('heading', {
      name: 'header-subtitle',
    });
    const btnSignOut = screen.getByRole('button', {
      name: 'Sign out button',
    });
    // Buttons when path is /list
    const btnFilter = screen.getByRole('button', {
      name: 'Filter Products button',
    });
    const btnCopyToken = screen.getByRole('button', {
      name: 'Copy token button',
    });

    // assertions
    expect(token).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(btnFilter).toBeInTheDocument();
    expect(btnSignOut).toBeInTheDocument();
    expect(btnCopyToken).toBeInTheDocument();
    expect(token).toHaveTextContent(TOKEN);
    expect(subtitle).toHaveTextContent(subtitleText);
  });
});
