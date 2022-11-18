import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import {
    get_all_warehouses,
    create_warehouse,
    delete_warehouses,
    get_all_product_by_warehouse,
    fetch_specific_postal_code
} from '../utils/constants';
import reducer from '../reducers/warehouse_reducers';
import {
    GET_WAREHOUSE_BEGIN,
    GET_WAREHOUSE_SUCCESS,
    GET_WAREHOUSE_ERROR,
    CREATE_NEW_WAREHOUSE,
    GET_SPECIFIC_POSTAL_SUCCESS,
    GET_SPECIFIC_POSTAL_BEGIN,
    GET_SPECIFIC_POSTAL_ERROR,


} from '../actions';

import { useUserContext } from './user_context';

const initialState = {

  warehouse_loading: false,
  warehouse_error: false,
specificPostal:null,
specific_warehouse_error:false,
specific_warehouse_loading:false,
  warehouse: [],
  new_warehouse: {
    warehouseName: '',
    OwnerName: '',
    PostalCode: 0,
      street: '',
      state: '',
      city: '',
    country:'',
    company: '',
  },
};

const wareHouseContext = React.createContext();

export const WareHouseProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSpecificPostal= async (data) => {
    dispatch({ type: GET_SPECIFIC_POSTAL_BEGIN });
    try {
      const response = await axios.post(`${fetch_specific_postal_code}/${data}`)
      dispatch({ type: GET_SPECIFIC_POSTAL_SUCCESS, payload: response.data })
    } catch (error) {
     dispatch({ type: GET_SPECIFIC_POSTAL_ERROR })
    }
  }

  const fetchWareHouses = async () => {
    dispatch({ type: GET_WAREHOUSE_BEGIN });
    try {
      const { data } = await axios.get(get_all_warehouses);
      dispatch({ type: GET_WAREHOUSE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_WAREHOUSE_ERROR });
    }
  };
  const deleteWareHouse = async (id) => {
    try {
      const response = await axios.delete(`${delete_warehouses}/${id}`);
      const { success, message } = response.data;
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
  };
  
  const createWareHouse = async (product) => {
    try {
      const response = await axios.post(create_warehouse, product);
      const { success, message } = response.data;
      console.log(response.data)
      return { success, message };
    } catch (error) {
      const { success, message } = error.response.data;
      return { success, message };
    }
    };
    

    const updateNewWareHouseDetails = (e) => {
      const name = e.target.name;
      let value = e.target.value;
      if (
        name === 'PostalCode'
      ) {
        value = Number(value);
      }
     
      dispatch({ type: CREATE_NEW_WAREHOUSE, payload: { name, value } });
    };


  useEffect(() => {
    fetchWareHouses();
  }, [currentUser]);

  return (
    <wareHouseContext.Provider
      value={{
        ...state,
        deleteWareHouse,
        createWareHouse,
        fetchWareHouses,
        fetchSpecificPostal,
        updateNewWareHouseDetails,
      }}
    >
      {children}
    </wareHouseContext.Provider>
  );
};
// make sure use
export const useWarehouseContext = () => {
  return useContext(wareHouseContext);
};
