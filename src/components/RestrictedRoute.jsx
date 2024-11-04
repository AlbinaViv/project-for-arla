import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
