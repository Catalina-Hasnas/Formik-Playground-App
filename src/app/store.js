import { createStore } from 'redux'
import rootReducer from './Reducers/Reducers';
import messageReducer from './Reducers/messageReducer'

export const store = createStore(rootReducer);


