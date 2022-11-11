import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_BEGIN,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    LOGOUT_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_BEGIN,
    FETCH_USER_ERROR,

} from "../actions"

const user_reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_BEGIN:
            return { ...state, loading: true, error: false }
        case LOGIN_SUCCESS:
            const { data } = action.payload
            if (action.payload.status === 200) {
                sessionStorage.setItem('token', data.token);
                return {
                    ...state,
                    loading: false,
                    token: data.token,
                    isAuthenticated: true,
                    currentUser: data.userType,
                };
            } else {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                Users: action.payload,
            }
        case FETCH_USER_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,

            }

        case LOGIN_ERROR:
            return { ...state, loading: false, error: true }
        case LOGOUT_BEGIN:
            sessionStorage.removeItem("token");
            return { ...state, loading: false, token: null, isAuthenticated: false, currentUser: null }
        case CREATE_USER_BEGIN:
            return { ...state, loading: true, error: false }
        case CREATE_USER_SUCCESS:
            if (action.payload.status === 200) {
                return { ...state, loading: false, isAuthenticated: true, currentUser: action.payload.data }
            }
            else {
                return { ...state, loading: false, error: true }
            }
        case CREATE_USER_ERROR:
            return { ...state, loading: false, error: true }
        case UPDATE_USER_BEGIN:
            return { ...state, loading: true, error: false }
        case UPDATE_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case UPDATE_USER_ERROR:
            return { ...state, loading: false, error: true }
        case DELETE_USER_BEGIN:
            return { ...state, loading: true, error: false }
        case DELETE_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case DELETE_USER_ERROR:
            return { ...state, loading: false, error: true }
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
}
export default user_reducer