import { combineReducers } from 'redux';
import { user } from './user';
import { potluck } from './potluck';

export default combineReducers({
  user,
  potluck,
  // other reducers here
});