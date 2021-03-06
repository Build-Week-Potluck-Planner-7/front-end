import { axiosWithAuth } from '../utils/axiosWithAuth';

// Login Actions

export const LOGIN_START = 'LOGIN_START';
export const loginStart = () => {
  return { type: LOGIN_START }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (userObj) => {
  return { type: LOGIN_SUCCESS, payload: userObj};
};

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = (errorObj) => {
  return { type: LOGIN_FAILURE, payload: errorObj };
};

// Logout Actions

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  window.localStorage.removeItem('token');
  return { type: LOGOUT };
};

// Signup Actions

export const SIGNUP_START = 'SIGNUP_START';
export const signupStart = () => {
  return { type: SIGNUP_START };
};

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signupSuccess = (userObj) => {
  return { type: SIGNUP_SUCCESS, payload: userObj};
};

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signupFailure = (errorObj) => {
  return {type: SIGNUP_FAILURE, payload: errorObj};
};