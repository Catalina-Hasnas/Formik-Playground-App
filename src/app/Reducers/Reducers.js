import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  messages: messageReducer,
  name: nameReducer
})

export default rootReducer;