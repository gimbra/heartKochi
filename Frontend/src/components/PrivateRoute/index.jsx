import { isTokenValid, checkRole } from '../../utils';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ role, path }) => {
  if (isTokenValid() && checkRole(role)) {
    return <Outlet />;
  } else {
    return <Navigate to={path} />;
  }
};

export default PrivateRoute;
