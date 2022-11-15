import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, currentUser } = useUserContext();
  const location = useLocation();
  

  if (
    rest.path === '/login' ||
    rest.path === '/register' ||
    rest.path === '/forgot-password' ||
    rest.path === '/reset-password'
  ) {
    if (currentUser?.userType === 'admin' && isAuthenticated) {
      return <Redirect to='/admin/dashboard' />;
    }
    return isAuthenticated ? (
      <Redirect to={location.state?.from ?? '/'} />
    ) : (
      <Route {...rest}>{children}</Route>
    );
  }
  if (
    rest.path === '/admin/dashboard' ||
    rest.path === '/admin/orders' ||
    rest.path === '/admin/orders/:id' ||
    rest.path === '/admin/products' ||
    rest.path === '/admin/products/:id' ||
    rest.path === '/admin'
  ) {
    return isAuthenticated && currentUser?.userType === 'admin' ? (
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
