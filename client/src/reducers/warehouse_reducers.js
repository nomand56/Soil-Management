import {
  GET_WAREHOUSE_BEGIN,
  GET_WAREHOUSE_SUCCESS,
  GET_WAREHOUSE_ERROR,
  CREATE_NEW_WAREHOUSE,
  GET_SPECIFIC_POSTAL_SUCCESS,
  GET_SPECIFIC_WAREHOUSE_BEGIN,
  GET_SPECIFIC_POSTAL_BEGIN,
  GET_SPECIFIC_POSTAL_ERROR,
  GET_WAREHOUSE_PROUDUCTS_BEGIN,
  GET_WAREHOUSE_PROUDUCTS_SUCCESS,
  GET_WAREHOUSE_PROUDUCTS_ERROR,
  ADD_WAREHOUSE_PRODUCTS_BEGIN,
  ADD_WAREHOUSE_PRODUCTS_SUCCESS,
  ADD_WAREHOUSE_PRODUCTS_ERROR
} from '../actions';

const warehouse_reducers = (state, action) => {
  if (action.type === CREATE_NEW_WAREHOUSE) {
    const { name, value } = action.payload;
    return { ...state, new_warehouse: { ...state.new_warehouse, [name]: value } };
  } 

  if (action.type === GET_SPECIFIC_POSTAL_BEGIN) {
    return { ...state, specific_warehouse_loading: true };

  }
  if (action.type === GET_SPECIFIC_POSTAL_ERROR) {
    return {
      ...state,
      specific_warehouse_loading: false,
      specific_warehouse_error: true,
    }

  }
  if (action.type === GET_WAREHOUSE_BEGIN) {
    return { ...state, warehouse_loading: true };
  }
  if (action.type === GET_SPECIFIC_POSTAL_SUCCESS) {
    return { ...state, specificPostal: action.payload }
  }
  if (action.type === GET_WAREHOUSE_SUCCESS) {
    return {
      ...state,
      warehouse_loading: false,
      warehouse: action.payload,
    };
  }
  if (action.type === GET_WAREHOUSE_PROUDUCTS_BEGIN) {
    return { ...state, warehouseProductsLoading: true }
  }
  if (action.type === GET_WAREHOUSE_PROUDUCTS_SUCCESS) {
    return { ...state, warehouseProductsLoading: false, warehouseProducts: action.payload }
  }
  if (action.type === GET_WAREHOUSE_PROUDUCTS_ERROR) {
    return { ...state, warehouseProductsLoading: false, warehouseProductsError: true }
  }
  if (action.type === ADD_WAREHOUSE_PRODUCTS_BEGIN) {
    return { ...state, warehouseProductsLoading: true }
  }
  if (action.type === ADD_WAREHOUSE_PRODUCTS_SUCCESS) {
    return { ...state, warehouseProductsLoading: false, warehouseProductsSuccess: true }
  }
  if (action.type === ADD_WAREHOUSE_PRODUCTS_ERROR) {
    return { ...state, warehouseProductsLoading: false, warehouseProductsError: true }
  }

  if (action.type === GET_WAREHOUSE_ERROR) {
    return { ...state, warehouse_loading: false, warehouse_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default warehouse_reducers;
