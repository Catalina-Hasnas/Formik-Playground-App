import * as actionTypes from '../Actions/actionTypes';

const nameReducer = (state = "new User", action) => {
  switch (action.type) {
    case actionTypes.GET:
      return state = action.name;
    default:
      return state;
  }
};

export default nameReducer;