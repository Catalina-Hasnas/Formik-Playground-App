import * as actionTypes from '../app/Actions/actionTypes';

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD:
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  };

export default messageReducer;