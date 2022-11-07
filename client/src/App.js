import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from './components';
import { useProductsContext } from './context/products_context';
import { useUserContext } from './context/user_context';
import 'react-toastify/dist/ReactToastify.css';
import {
  Home,
  About,
  Products,
  Cart,
  // Product,
  SingleProduct,
  // Checkout,
  Error,
  Login,
  Register,
  Forgot,
  Reset,
  OrdersPage,
  PrivateRoute,
  ProfilePage,
  CheckoutPage,
} from './pages';
import {
  Dashboard,
  AdminOrdersPage,
  ProductsPage,
  SingleOrderPage,
  SingleProductPage,
  AdminsPage,
  LoginPage,
} from './Admin/adminPages';

function App() {
  const { isSidebarOpen } = useProductsContext();
  const { currentUser } = useUserContext();
  const overflowPropertyToHideScroll =
    isSidebarOpen === true ? 'hidden' : 'scroll';
  console.log('current User', currentUser);
  return (
    <div style={{ maxHeight: '100vh', overflow: overflowPropertyToHideScroll }}>
      <Router>
        <Toast />
        <Navbar />
        <Sidebar />
        <ErrorBoundary>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <PrivateRoute exact path='/login'>
              <Login />
            </PrivateRoute>
            <PrivateRoute exact path='/register'>
              <Register />
            </PrivateRoute>
            <PrivateRoute exact path='/forgot-password'>
              <Forgot />
            </PrivateRoute>
            <PrivateRoute exact path='/reset-password'>
              <Reset />
            </PrivateRoute>
            <Route exact path='/products/:id'>
              <SingleProduct />
            </Route>
            <PrivateRoute exact path='/checkout'>
              <CheckoutPage />
            </PrivateRoute>
            <PrivateRoute exact path='/orders'>
              <OrdersPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/orders'>
              <AdminOrdersPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/orders/:id'>
              <SingleOrderPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/products'>
              <ProductsPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/products/:id'>
              <SingleProductPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin'>
              <AdminsPage />
            </PrivateRoute>

            <Route exact path='*'>
              <Error />
            </Route>
          </Switch>
        </ErrorBoundary>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
