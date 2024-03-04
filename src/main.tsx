import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardRouterFallback from './components/@react-router/cards/CardRouterFallback';
import './index.scss';
import TokenProvider from './providers/TokenProvider';
import { routes } from './router/routes';

const appRouter = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider
        router={appRouter}
        fallbackElement={<CardRouterFallback />}
      />
      <Toaster />
    </TokenProvider>
  </React.StrictMode>,
);
