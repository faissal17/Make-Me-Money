import { isAuth } from '../helper/isAuth';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
  let auth = isAuth();

  return auth ? <Outlet /> : <Navigate to="/Login" />;
};
