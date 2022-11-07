import {
  GET_WAREHOUSE_BEGIN,
  GET_WAREHOUSE_SUCCESS,
  GET_WAREHOUSE_ERROR,
  CREATE_NEW_WAREHOUSE,
} from '../actions';

const warehouse_reducers = (state, action) => {
  if (action.type === CREATE_NEW_WAREHOUSE) {
    const { name, value } = action.payload;
    return { ...state, new_warehouse: { ...state.new_warehouse, [name]: value } };
  }

  
  if (action.type === GET_WAREHOUSE_BEGIN) {
    return { ...state, warehouse_loading: true };
  }

  if (action.type === GET_WAREHOUSE_SUCCESS) {
    return {
      ...state,
      warehouse_loading: false,
      warehouse: action.payload,
    };
  }

  if (action.type === GET_WAREHOUSE_ERROR) {
    return { ...state, warehouse_loading: false, warehouse_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default warehouse_reducers;
