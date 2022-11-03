import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from './components';
import { useProductsContext } from './context/products_context';
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
import {Dashboard, AdminOrdersPage, ProductsPage, SingleOrderPage, SingleProductPage, AdminsPage, LoginPage} from "./Admin/adminPages"

function App() {
  const { isSidebarOpen } = useProductsContext();
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
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <PrivateRoute exact path='/checkout'>
              <CheckoutPage/>
            </PrivateRoute>
            <PrivateRoute exact path='/orders'>
              <OrdersPage />
            </PrivateRoute>
            <PrivateRoute exact path='/profile'>
              <ProfilePage />
            </PrivateRoute>
            {/* <Admin route bellow */}
            <PrivateRoute exact path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path='/adminorders'>
              <AdminOrdersPage />
            </PrivateRoute>
            <PrivateRoute exact path='/adminorders/:id'>
              <SingleOrderPage />
            </PrivateRoute>
            <PrivateRoute exact path='/adminproducts'>
              <ProductsPage />
            </PrivateRoute>
            <PrivateRoute exact path='/adminproducts/:id'>
              <SingleProductPage />
            </PrivateRoute>
            <PrivateRoute exact path='/admins'>
              <AdminsPage />
            </PrivateRoute>
            <PrivateRoute exact path='/adminlogin'>
              <LoginPage />
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
