  import {
  UPDATE_SHIPPING_DETAILS,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
  GET_ADMIN_ORDERS_BEGIN,
  GET_ADMIN_ORDERS_SUCCESS,
  GET_ADMIN_ORDERS_ERROR
} from '../actions';

const order_reducer = (state, action) => {
  if (action.type === UPDATE_SHIPPING_DETAILS) {
    const { name, value } = action.payload;
    if (name === 'name' || name === 'phone_number') {
      return { ...state, shipping: { ...state.shipping, [name]: value } };
    }
    return {
      ...state,
      shipping: {
        ...state.shipping,
        address: { ...state.shipping.address, [name]: value },
      },
    };
  }
  if (action.type === GET_ORDERS_BEGIN) {
    return { ...state, orders_loading: true, orders_error: false };
  }
  if (action.type === GET_ORDERS_ERROR) {
    return { ...state, orders_loading: false, orders_error: true };
  }
  if (action.type === GET_ORDERS_SUCCESS) {
    return {
      ...state,
      orders_loading: false,
       orders: action.payload.reverse(),
    };
  }
  if (action.type === GET_ADMIN_ORDERS_BEGIN) {
    return { ...state, admin_orders_loading: true, admin_orders_error: false };
  }
  if (action.type === GET_ADMIN_ORDERS_ERROR) {
  return { ...state, admin_orders_loading: false, admin_orders_error: true };
  }
    
  if (action.type === GET_ADMIN_ORDERS_SUCCESS) {
    console.log("from order reducer",action.payload);
    const orders = action.payload;
    let recent_orders = action.payload;
    recent_orders = recent_orders
      .sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      .slice(0, 11);
    const pending_orders = orders.filter(
      (order) => order.orderStatus === 'processing'
    );
    const delivered_orders = orders.filter(
      (order) => order.orderStatus === 'delivered'
    );
    const total_revenue = orders.reduce((total, order) => {
      total += order.totalPrice;
      return total;
    }, 0);
    return {
      ...state,
      admin_orders_loading: false,
      orders,
      pending_orders,
      delivered_orders,
      total_revenue,
      recent_orders,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default order_reducer;
