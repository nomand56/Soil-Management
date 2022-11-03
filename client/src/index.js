import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from '../src/Admin/config/ThemeConfig';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AdminProvider } from './context/admin_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { OrderProvider } from './context/order_context';
import colorTheme from './components/theme/index'
ReactDOM.render(
  <UserProvider>
    <AdminProvider>
      <ProductsProvider>
        <CartProvider>
          <OrderProvider>
            <ChakraProvider theme={theme}>
              <ColorModeScript
                initialColorMode={colorTheme.config.initialColorMode}
              />
              <App />
            </ChakraProvider>
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </AdminProvider>
  </UserProvider>,
  document.getElementById('root')
);
