import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_REVIEWS_BEGIN,
  GET_SINGLE_PRODUCT_REVIEWS_ERROR,
  GET_SINGLE_PRODUCT_REVIEWS_SUCCESS,
  SET_GRIDVIEW,
  SET_LISTVIEW
} from '../actions';


const products_reducer = (state, action) => {
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {  
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: action.payload
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_REVIEWS_BEGIN) {
    return {
      ...state,
      single_product_reviews_loading: true,
      single_product_reviews_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_REVIEWS_ERROR) {
    return {
      ...state,
      single_product_reviews_loading: false,
      single_product_reviews_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_REVIEWS_SUCCESS) {
    return {
      ...state,
      single_product_reviews_loading: false,
      single_product: {
        ...state.single_product,
        reviews: action.payload,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
