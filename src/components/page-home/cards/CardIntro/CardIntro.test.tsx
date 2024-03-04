import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardIntro from '.';

describe('CardIntro test', () => {
  test('renders correctly', () => {
    const APP_NAME = 'Shopy';
    const APP_DESCRIPTION = `Let's plan your purchases with our smart shopping list`;

    render(<CardIntro />);

    // UI elements
    const title = screen.getByRole('heading', { name: APP_NAME });
    const description = screen.getByText(APP_DESCRIPTION);

    // assertions
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
