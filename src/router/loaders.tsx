import { redirect } from 'react-router-dom';
import { KEY_TOKEN } from '../constants/constants-app';
import { HomeRoute, ProductListRoute } from '../constants/constants-routes';
import { isTokenStoredValid } from '../helpers/helpers-firebase';

export const loaderPageNotProtected = async () => {
  const token = localStorage.getItem(KEY_TOKEN) || '';
  const isValid = await isTokenStoredValid(token);

  if (isValid) {
    return redirect(ProductListRoute.path);
  }

  return null;
};

export const loaderPageProtected = async () => {
  const token = localStorage.getItem(KEY_TOKEN) || '';
  const isValid = await isTokenStoredValid(token);

  if (!isValid) {
    return redirect(HomeRoute.path);
  }

  return { token };
};
