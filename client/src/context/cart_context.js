import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  DELIVERY_OPTION,
  SUBMIT_FORM
} from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
  form:null,
  delivery:null
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
const onSubmit = (data) => {
dispatch({ type: SUBMIT_FORM, payload: data })
}
  const addToCart = (data) => {
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const deliveryOption = (value) => {
    dispatch({ type: DELIVERY_OPTION, payload: value });
  };



  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart,deliveryOption,onSubmit}}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
