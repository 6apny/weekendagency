import { combineReducers } from 'redux';
import authorize from './authorize/reducer';
import rabbits from './rabbitDesk/reducer';

export default combineReducers({
  token: authorize,
  rabbits
});