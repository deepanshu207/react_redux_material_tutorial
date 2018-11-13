import { push } from 'react-router-redux'
import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR,CLEAR_CURRENT_PROFILE} from '../constants';

export const login=(email, password,history) => dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }

export const setLoginPending=(isLoginPending) => {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
};

export const setLoginSuccess=(isLoginSuccess) => {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
};

export const setLoginError=(loginError) => {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
};

export const callLoginApi=(email, password, callback) => {
  setTimeout(() => {
    if (email === 'admin' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
};

export const clearCurrentProfile = () => {
    return {
      type: CLEAR_CURRENT_PROFILE
    };
  };

