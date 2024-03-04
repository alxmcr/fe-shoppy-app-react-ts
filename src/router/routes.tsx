import { RouteObject } from 'react-router-dom';
import CardRouterError from '../components/react-router/cards/CardRouterError';
import {
  AddProductRoute,
  HomeRoute,
  ProductListRoute,
} from '../constants/constants-routes';
import AddProductPage from '../pages/AddProductPage';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import { loaderPageNotProtected, loaderPageProtected } from './loaders';

export const routes: RouteObject[] = [
  {
    id: HomeRoute.id,
    path: HomeRoute.path,
    element: <HomePage />,
    loader: loaderPageNotProtected,
    errorElement: <CardRouterError />,
  },
  {
    id: ProductListRoute.id,
    path: ProductListRoute.path,
    element: <ProductListPage />,
    loader: loaderPageProtected,
    errorElement: <CardRouterError />,
  },
  {
    id: AddProductRoute.id,
    path: AddProductRoute.path,
    element: <AddProductPage />,
    loader: loaderPageProtected,
    errorElement: <CardRouterError />,
  },
];
