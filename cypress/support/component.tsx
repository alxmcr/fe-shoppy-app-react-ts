import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import './commands.ts';

// cy.mount(<MyComponent />)
Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>;

  return mount(wrapped, mountOptions);
});
