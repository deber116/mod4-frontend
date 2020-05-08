import { combineReducers } from 'redux';
import user from './userReducer';
import notes from './noteReducer'

export default combineReducers({
  user,
  notes
  //This means that "user" is pointing to the function that returns the userReducer
  //and notes is pointing to the funtion that returns the noteReducer
});