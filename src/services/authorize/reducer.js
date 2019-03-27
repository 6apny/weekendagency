import { CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE,
  EXIT_USER } from './actionTypes';

export default (state = false, action) => {
  switch(action.type) {
    case CHECK_LOGIN_REQUEST:
      return 'Loading';
    case CHECK_LOGIN_SUCCESS:
      return action.payload;
    case CHECK_LOGIN_FAILURE:
      return 'Error';
    case EXIT_USER:
      return false;
    default:
      return state;
  }
}