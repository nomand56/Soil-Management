import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary, Stepper } from './components';
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
  StepperCheckout,
} from './pages';
import {
  Dashboard,
  AdminOrdersPage,
  ProductsPage,
  SingleOrderPage,
  SingleProductPage,
  AdminsPage,
  LoginPage,
  WareHouses,
  AdminCustomerPage,
  QuotationsPage,
  ProductsType
} from './Admin/adminPages';

function App() {
  const { isSidebarOpen, userType } = useProductsContext();
  const { currentUser } = useUserContext();

  const overflowPropertyToHideScroll =
    isSidebarOpen === true ? 'hidden' : 'scroll';
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
            {userType === "proffkunder" ? (
              <PrivateRoute exact path='/StepperCheckout'>
                <StepperCheckout />
              </PrivateRoute>
            ) : (
              <Route exact path='/StepperCheckout' >
                <StepperCheckout />  
              </Route>
            )
            }
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
            <PrivateRoute exact path='/admin/productstype'>
              <ProductsType />
            </PrivateRoute>

            <PrivateRoute exact path='/admin/warehouses'>
              <WareHouses />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/products/:id'>
              <SingleProductPage />
            </PrivateRoute>

            <PrivateRoute exact path='/admin'>
              <AdminsPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/customers'>
              <AdminCustomerPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admin/quotations'>
              <QuotationsPage />
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
