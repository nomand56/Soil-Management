  import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/order_reducer';
import {
  UPDATE_SHIPPING_DETAILS,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ADMIN_ORDERS_BEGIN,
  GET_SINGLE_ORDER_BEGIN,
  GET_ADMIN_ORDERS_SUCCESS,
  GET_SINGLE_ORDER_SUCCESS,
  GET_SINGLE_ORDER_ERROR,
  UPDATE_ORDER_STATUS,
  GET_ADMIN_ORDERS_ERROR

} from '../actions';
import { useUserContext } from './user_context';
import { useCartContext } from './cart_context';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  get_order_url,
  create_order_url,
  update_order_status,
  orders_url,
  single_order_url,
  get_specific_order_url,
  delete_order_url,
} from '../utils/constants';

const initialState = {
  orders_loading: false,
  orders_error: false,
  orders: [],
  single_order_loading: false,
  single_order_error: false,
  single_order: {},
  single_order_status: '',
  recent_orders: [],
  pending_orders: 0,
  delivered_orders: 0,
  total_revenue: 0,
  shipping: {
    firstName:" ",
    lastName: " ",
    phone_number: '',
    address: {
      line1: '',
      postal_code: '',
      city: '',
      state: '',
        
    },
  },
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useUserContext();
  const { cart, total_amount, shipping_fee } = useCartContext();
  const [dataObj,setDataObj] = React.useState([])
 useEffect(() => {
   fetchOrders(get_specific_order_url);
 }, [currentUser, cart]);


  const fetchOrders = async () => {
    dispatch({ type: GET_ORDERS_BEGIN });
    try {
      const response = await axios.post(get_specific_order_url, {
        email: currentUser.email,
      });
      const orders = response.data;
      dispatch({ type: GET_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({type:"GET_ORDERS_ERROR",payload:error})
    } 
  };
  const fetchAdminOrders = async () => {
    dispatch({ type: GET_ADMIN_ORDERS_BEGIN });
    try {
      const response = await axios.get(orders_url);
  
      dispatch({ type: GET_ADMIN_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ADMIN_ORDERS_ERROR });
    }
  };

  const fetchSingleOrder = async (id) => {
    dispatch({ type: GET_SINGLE_ORDER_BEGIN });
    try {
      const response = await axios.post(`${single_order_url}${id}`);
      const { data } = response;
      dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ORDER_ERROR });
    }
  };

    const updateOrderStatus = async (status, id) => {
      try {
        const response = await axios.put(`${update_order_status}${id}`, {
          status,
        });
        const { success, data } = response.data;
        dispatch({ type: UPDATE_ORDER_STATUS, payload: data.orderStatus });
        fetchOrders();
        return { success, status: data.orderStatus };
      } catch (error) {
        const { success, message } = error.response.data;
        return { success, message };
      }
    };
    const deleteOrder = async (id) => {
      try {
        const response = await axios.delete(`${delete_order_url}${id}`);
        const { success, message } = response.data;
        return { success, message };
      } catch (error) {
        const { success, message } = error.response.data;
        return { success, message };
      }
    };



  const placeOrder = async () => {
    const shippingInfo = {
      address: state.shipping.address.line1,
      city: state.shipping. address.city,
      state: state.shipping.address.state,
      postalCode: state.shipping.address.postal_code,
      phoneNumber: state.shipping.phone_number,
    };

    const orderItems = cart.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.amount,
        image: item.image,
        product: item.id,
      };
    });
    const user ={
      email:currentUser?.email || "Guest",
      name: state.shipping.firstName || "Guest"
    }
    const body = {
      user,
      shippingInfo,
      orderItems,
      itemsPrice: total_amount,
      shippingPrice: shipping_fee,
      totalPrice: total_amount + shipping_fee,
    };
    try {
      const response=  await axios.post(create_order_url, body);
        if(response.data.success === 200){
          toast.success('Order placed successfully');
          
        }
      }catch (error) {
      toast.error(error.message);
    }       
  };

  const updateShipping = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SHIPPING_DETAILS, payload: { name, value } });
  };
useEffect(() => {
  fetchAdminOrders();
}, [currentUser]);
 

  return (
    <OrderContext.Provider value={{ ...state, updateShipping, placeOrder,  fetchAdminOrders,fetchSingleOrder,
      updateOrderStatus,
      deleteOrder,
      setDataObj,
      dataObj,
      }}>
      {children}
    </OrderContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
}
  