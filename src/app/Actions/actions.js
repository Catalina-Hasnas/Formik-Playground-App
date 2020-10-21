import * as actionTypes from './actionTypes';

export const addMessage = (message) => {
    return {
      type: actionTypes.ADD,
      message: message
    }
};