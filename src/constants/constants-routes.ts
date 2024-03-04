type AppRoute = {
  id: string;
  path: string;
};

export const HomeRoute: AppRoute = {
  id: 'home',
  path: '/',
};

export const ProductListRoute: AppRoute = {
  id: 'product-list',
  path: '/list',
};

export const AddProductRoute: AppRoute = {
  id: 'add-new-product',
  path: '/add-product',
};
