import axios from 'axios';
import React, { useContext, useEffect, useReducer,useState } from 'react';
  import { products_url, update_product_url , create_new_product, delete_product_url,single_product_url,filtered_products_url,inquiry_product, fetch_inquiry_url, fetch_product_type, post_product_type, post_postal_code, fetch_postal_code} from '../utils/constants';
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
  GET_FILTERED_PRODUCTS_ERROR,
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_BEGIN,
  INQUIRY_FORM_BEGIN,
  INQUIRY_FORM_SUCCESS,
  INQUIRY_FORM_ERROR,
  FETCH_INQUIRY_FORM_BEGIN,
  FETCH_INQUIRY_FORM_SUCCESS,
  FETCH_INQUIRY_FORM_ERROR,
  FETCH_ADD_TYPE_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_ADD_TYPE_ERROR,
  FETCH_ADD_TYPE_SUCCESS,
  POST_ADD_TYPE_ERROR,
  POST_ADD_TYPE_SUCCESS,
  POST_ADD_TYPE_BEGIN,
} from '../actions';

import { useUserContext } from './user_context';
import { useWarehouseContext } from './warehouse_context';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  grid_view: true,
  products: [],
  new_product: {
    productName: '',
    supplierId: '',
    supplierPostalCode: 0,
    price: 50000,
    stock: 10,
    description: '',
    quantity: '',
    land: '',
    company: '',
    jord: '',
    shipping: true,
    featured: false,
    usedFor: [],
    success: false,
  },
  filtered_products: null,
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  featured_products: [],
  filtered_products_loading: false,
  filtered_products_error: false,
  inquiryForm: [],
  inquiry_form_loading: false,
  inquiry_form_error: false,
  data:null,
  addType: [],
  add_type_error: false,
  add_type_loading: false,
  add_type_success: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [userType,setUserType]=useState(null)
  const [postalData,setPostalData]=useState(null)

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
      fetchProducts();
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
  
  
    }
  };
  const fetchInquiry = async () => {
    dispatch({ type: FETCH_INQUIRY_FORM_BEGIN });
    try {
      const {data} = await axios.get(fetch_inquiry_url);
      dispatch({ type: FETCH_INQUIRY_FORM_SUCCESS, payload: data });
    }
    catch(error){
      dispatch({ type: FETCH_INQUIRY_FORM_ERROR, payload: error });

    }
  }
  const fetchProductType= async (data)=>{
     dispatch({type:FETCH_ADD_TYPE_BEGIN})
    try{
      const response = await axios.get(fetch_product_type)

      dispatch({type:FETCH_ADD_TYPE_SUCCESS, payload:response.data})
    }
    catch(error){
      dispatch({type:FETCH_ADD_TYPE_ERROR, payload:error})
    }
  } 
  const addProductType= async (data)=>{
    dispatch({type:POST_ADD_TYPE_BEGIN})
   try{
     const response = await axios.post(post_product_type,data  )
     dispatch({type:POST_ADD_TYPE_SUCCESS, payload:response.data})
   }
   catch(error){
     dispatch({type:POST_ADD_TYPE_ERROR, payload:error})
   }
 } 
 const addPostalCode = async (data) => {
  try {
    const response = await axios.post(post_postal_code, data);
    const { success, message } = response.data;
    return { success, message };
  } catch (error) {
    const { success, message } = error.response.data;
    return { success, message };
  }
};
const getPostalCode = async (data) => {
  try {
    const response = await axios.get(fetch_postal_code);
    setPostalData(response.data)
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
  const InquiryForm = async (data) => {  
    dispatch({ type: INQUIRY_FORM_BEGIN });
    try{
      const response = await axios.post(inquiry_product, data)
        dispatch({ type: INQUIRY_FORM_SUCCESS, payload: response });      
    }
    catch(error){ 
      dispatch({ type: INQUIRY_FORM_ERROR, payload: error });
    }

  
  
  }
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
      fetchProducts();
      return { success:true, data };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success:false, message:"Product Added Successfully" };
    }
  };
  const updateProduct = async (id, product) => {
    try {
      const response = await axios.put(`${update_product_url}${id}`, product);
      const { success, message } = response.data;
      fetchProducts();
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };
const filteredProducts = async (data) => {
    dispatch({ type: GET_FILTERED_PRODUCTS_BEGIN });
  try{
      const response = await axios.post(filtered_products_url,data);
    dispatch({ type: GET_FILTERED_PRODUCTS_SUCCESS, payload: response.data });
 
  }
  catch(error){
  dispatch({ type: GET_FILTERED_PRODUCTS_ERROR });
  }

};

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(`${single_product_url}${id}`);
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
    fetchInquiry()
    fetchProductType()
    getPostalCode()
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
        filteredProducts,
        fetchProductType,
        addProductType,
        InquiryForm,
        setUserType,
        userType,
        fetchInquiry,
        getPostalCode,
        addPostalCode,
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
