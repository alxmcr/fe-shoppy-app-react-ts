import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardRouterFallback from './components/react-router/cards/CardRouterFallback';
import './index.scss';
import { routes } from './router/routes';

const appRouter = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={appRouter}
      fallbackElement={<CardRouterFallback />}
    />
    <Toaster />
  </React.StrictMode>,
);
