import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated   } = useUserContext();
  const location = useLocation();

  if (
    rest.path === '/login' ||
    rest.path === '/register' ||
    rest.path === '/forgot-password' ||
    rest.path === '/reset-password'
  ) {
    return isAuthenticated ? (
      <Redirect to={location.state?.from ?? '/'} />
    ) : (
      <Route {...rest}>{children}</Route>
    );
  }
  if (rest.path === '/admin/dashboard' ||
   rest.path === '/admin/orders' || 
  rest.path === '/admin/orders/:id' ||
   rest.path === '/admin/products' || 
   rest.path === '/admin/products/:id' || 
   rest.path === '/admin') {
     return isAuthenticated && cuurentUser.userType === 'admin' ? (
      <Route {...rest}>{children}</Route>
    ) : (
      <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.path },
      }}
    />
    );

  
  }

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.path },
      }}
    />
  );
};
export default PrivateRoute;
