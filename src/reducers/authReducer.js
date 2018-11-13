import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR,CLEAR_CURRENT_PROFILE} from '../constants';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_LOGIN_PENDING:
        return Object.assign({}, state, {
          isLoginPending: action.isLoginPending
        });
  
      case SET_LOGIN_SUCCESS:
        return Object.assign({}, state, {
          isLoginSuccess: action.isLoginSuccess
        });
  
      case SET_LOGIN_ERROR:
        return Object.assign({}, state, {
          loginError: action.loginError
        });
  
        case CLEAR_CURRENT_PROFILE:
        return {
        ...state,
        isLoginPending: false,
        isLoginSuccess: false,
        loginError: null
        };

      default:
        return state;
    }
  }

