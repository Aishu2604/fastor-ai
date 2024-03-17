/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if(!isLoggedIn) {
    return <Navigate to="/" />
  }
  return <>{children}</>
};

export default AuthRoute;
