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
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_ERROR,
  GET_FILTERED_PRODUCTS_BEGIN,
  INQUIRY_FORM_BEGIN,
  INQUIRY_FORM_SUCCESS,
  INQUIRY_FORM_ERROR,
  FETCH_INQUIRY_FORM_SUCCESS,
  FETCH_INQUIRY_FORM_ERROR,
  FETCH_INQUIRY_FORM_BEGIN,
  FETCH_ADD_TYPE_BEGIN,
  FETCH_ADD_TYPE_SUCCESS,
  FETCH_ADD_TYPE_ERROR,
  POST_ADD_TYPE_BEGIN,
  POST_ADD_TYPE_SUCCESS,
  POST_ADD_TYPE_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  if (action.type === CREATE_NEW_PRODUCT) {
    const { name, value } = action.payload;
    return { ...state, new_product: { ...state.new_product, [name]: value } };
  }

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
      featured_products: action.payload,
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
  if (action.type === GET_FILTERED_PRODUCTS_BEGIN) {
    return {
      ...state,
      filtered_products_loading: true,
    };
  }
  if (action.type === GET_FILTERED_PRODUCTS_SUCCESS) {
    console.log(action.payload);
    return {
      ...state,
      filtered_products_loading: false,
      filtered_products: action.payload,
    };
  }
  if (action.type === GET_FILTERED_PRODUCTS_ERROR) {

    return {

      ...state,
      filtered_products_loading: false,
      filtered_products_error: true,
      filtered_products: null
    };
  }
  if (action.type === INQUIRY_FORM_BEGIN) {

    return {
      ...state,
      inquiry_form_loading: true,
      inquiry_form_error: false,

    }
  }

  if (action.type === FETCH_INQUIRY_FORM_BEGIN) {
    return {
      ...state,
      inquiry_form_loading: true,
      inquiry_form_error: false,

    }

  }
  if (action.type === FETCH_INQUIRY_FORM_SUCCESS) {
    return {
      ...state,
      inquiry_form_loading: false,
      inquiry_form_error: false,
      inquiryForm: action.payload
    }
  }
  if (action.type === FETCH_INQUIRY_FORM_ERROR) {
    return {
      ...state,
      inquiry_form_loading: false,
      inquiry_form_error: true,

    }
  }

  if (action.type === FETCH_ADD_TYPE_BEGIN) {
    return {
      ...state,
      add_type_loading: true,
      add_type_error: false,
    }
  }

  if (action.type === FETCH_ADD_TYPE_SUCCESS) {
    return {
      ...state,
      add_type_loading: false,
      add_type_error: false,
      addType: action.payload
    }


  }

  if (action.type === FETCH_ADD_TYPE_ERROR) {
    return {
      ...state,
      add_type_loading: false,
      add_type_error: true,

    }


  }

  if (action.type === POST_ADD_TYPE_BEGIN) {
    return {
      ...state,
      add_type_loading: true,
      add_type_error: false,
    }
  }

  if (action.type === POST_ADD_TYPE_SUCCESS) {
    return {
      ...state,
      add_type_loading: false,
      add_type_error: false,
      add_type_success: true
    }


  }

  if (action.type === POST_ADD_TYPE_ERROR) {
    return {
      ...state,
      add_type_loading: false,
      add_type_error: true,

    }


  }





  if (action.type === INQUIRY_FORM_SUCCESS) {
    return { ...state, inquiry_form_loading: false, inquiry_form_error: false, success: true }
  }
  if (action.type === INQUIRY_FORM_ERROR) {
    return { ...state, inquiry_form_loading: false, inquiry_form_error: true, success: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
