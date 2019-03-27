import { LOAD_RABBITS_SUCCESS } from './actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case LOAD_RABBITS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}