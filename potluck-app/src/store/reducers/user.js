import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions';

const initialState = {
  user: {},
  error: '',
  isCallingAPI: false,
  isLoggedIn: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isCallingAPI: false,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case LOGOUT:
      return {
        ...state,
        state: initialState,
        isLoggedIn: false
      }
    case SIGNUP_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isCallingAPI: false,
        isLoggedIn: true
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      }
    default:
      return state;
  }
}