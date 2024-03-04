import { useLocation, useRouteError } from 'react-router-dom';
import './CardRouterError.scss';

export default function CardRouterError() {
  const location = useLocation();
  const error = useRouteError();
  const { pathname } = location;
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Error! {pathname}</div>;
}
