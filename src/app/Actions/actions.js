import * as actionTypes from './actionTypes';

export const addMessage = (message) => {
  return {
    type: actionTypes.ADD,
    message: message
  }
};

export const addName = (name) => {
  return {
    type: actionTypes.GET,
    name: name
  }
}