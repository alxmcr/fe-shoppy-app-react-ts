import { RouteObject } from 'react-router-dom';
import {
    AddProductRoute,
    HomeRoute,
    ProductListRoute,
} from '../constants/constants-routes';
import AddProductPage from '../pages/AddProductPage';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';

export const routes: RouteObject[] = [
  {
    id: HomeRoute.id,
    path: HomeRoute.path,
    element: <HomePage />,
  },
  {
    id: ProductListRoute.id,
    path: ProductListRoute.path,
    element: <ProductListPage />,
  },
  {
    id: AddProductRoute.id,
    path: AddProductRoute.path,
    element: <AddProductPage />,
  },
];
