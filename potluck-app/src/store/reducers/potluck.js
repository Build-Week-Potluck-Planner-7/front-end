import {
  ADD_POTLUCK_START,
  ADD_POTLUCK_SUCCESS,
  ADD_POTLUCK_FAILURE
} from '../actions';

const initialState = {
  potluck: {},
  error: '',
  isCallingAPI: false
}

export const potluck = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POTLUCK_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      }
    case ADD_POTLUCK_SUCCESS:
      return {
        ...state,
        potluck: action.payload,
        isCallingAPI: false,
      }
    case ADD_POTLUCK_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      }
    default:
      return state;
    };
}