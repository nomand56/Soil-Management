
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
  import { products_url, update_product_url , create_new_product, delete_product_url,single_product_url } from '../utils/constants';
import reducer from '../reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE, 
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  CREATE_NEW_PRODUCT,
  UPDATE_EXISTING_PRODUCT,
} from '../actions';

import { useUserContext } from './user_context';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  grid_view:true,
  products: [],
  new_product: {
    productName: '',
    supplierId: '',
    supplierPostalCode: 0,
    price: 50000,
    stock: 10,
    description: '',
    category: '',
    company: '',
    shipping: true,
    featured: false,
    usedFor:[]
  },
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  featured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const {data} = await axios.get(products_url);

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${delete_product_url}/${id}`);
      const { success, message } = response.data;
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };
  const updateNewProductDetails = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'price' || name === 'stock' || name === 'supplierPostalCode') {
      value = Number(value);
    }
    if (name === 'usedFor')
    {
      value = e.target.value.split(",");
      }
    if (name === 'colors' || name === 'sizes') {
      value = value.replace(/\s+/g, '');
      if (value === '') {
        value = [];
      } else if (value.indexOf(',') > -1) {
        value = value.split(',');
      } else {
        value = value.split();
      }
    }
    if (name === 'shipping' || name === 'featured') {
      value = e.target.checked;
    }
    dispatch({ type: CREATE_NEW_PRODUCT, payload: { name, value } });
  };
  const updateExistingProductDetails = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'price' || name === 'stock' || name === 'supplierPostalCode') {
      value = Number(value);
    }
    if (name === 'colors' || name === 'sizes') {
      value = value.replace(/\s+/g, '');
      if (value === '') {
        value = [];
      } else if (value.indexOf(',') > -1) {
        value = value.split(',');
      } else {
        value = value.split();
      }
    }
    if (name === 'shipping' || name === 'featured') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_EXISTING_PRODUCT, payload: { name, value } });
  };
  const createNewProduct = async (product) => {
    try {
      const response = await axios.post(create_new_product, product);
      const { success, data } = response.data;
   
      return { success, data };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };
  const updateProduct = async (id, product) => {
    try {
      const response = await axios.put(`${update_product_url}${id}`, product);
      const { success, message } = response.data;
      // fetchProducts();
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(`${single_product_url}${id}`);
  // console.log(`${single_product_url}${id}`)
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };


  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        // reviewProduct,
        setGridView,
        deleteProduct,
        updateNewProductDetails,
        updateExistingProductDetails,
        createNewProduct,
        fetchProducts,
        updateProduct,
        setListView,
        fetchProducts,
        // getProductReviews,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
