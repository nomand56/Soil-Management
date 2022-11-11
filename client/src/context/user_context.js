import React, { useContext, useEffect, useReducer } from 'react';
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_BEGIN,
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_BEGIN
} from '../actions';
import reducer from '../reducers/user_reducer';

import {
  signup_url,
  login_url,
  update_url,
  delete_url,
  fetch_client_url
} from '../utils/constants';
import axios from 'axios';

const initialState = {
  token: null,
  currentUser: null,
  loading: false,
  error: false,
  Users: [],
  isAuthenticated: false,
};
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(login_url, { email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response });
    } catch(error){
      dispatch({ type: LOGIN_ERROR });
    }
  };
  const createUser = async (email, password, name) => {
    dispatch({ type: CREATE_USER_BEGIN });
    try {
      const response = await axios.post(signup_url, { email, password, name });
      
      dispatch({ type: CREATE_USER_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: CREATE_USER_ERROR });
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT_BEGIN });
  };
  const updateUser = async (data) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await axios.put(update_url, data, config);

      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_ERROR });
    }
  };
  const fetchUser = async () => {
    dispatch({ type: FETCH_USER_BEGIN });
    try {
      const response = await axios.get(fetch_client_url);
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
    dispatch({ type: FETCH_USER_ERROR });
    }
  };
  
  const deleteUser = async (data) => {
    dispatch({ type: DELETE_USER_BEGIN });
    try {
      const respones = await axios.delete(`${delete_url}/${data}`);
      dispatch({ type: DELETE_USER_SUCCESS, payload: respones.data });
    } catch (error) {
      dispatch({ type: DELETE_USER_ERROR });
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
        logout,
        createUser,
        fetchUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
