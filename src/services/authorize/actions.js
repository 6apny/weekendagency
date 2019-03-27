import {
  CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE,
  EXIT_USER
} from './actionTypes';

import { fetchRabbits } from '../rabbitDesk/actions';

export const checkStart = () => {
  return {
    type: CHECK_LOGIN_REQUEST
  };
};

export const checkSuc = token => {
  return {
    type: CHECK_LOGIN_SUCCESS,
    payload: token
  };
};

export const checkErr = () => {
  return {
    type: CHECK_LOGIN_FAILURE
  };
};

export const exitUser = () => {
  return {
    type: EXIT_USER
  }
};

export const checkUser = user => {

  return dispatch => {
    const url = 'http://conquest.weekendads.ru/login_check';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    dispatch(checkStart());

    fetch(url, options)
      .then(data => data.json())
      .then(data => {
        dispatch(checkSuc(data.token));
        dispatch(fetchRabbits(data.token));
      })
      .catch(e => dispatch(checkErr()));
  };
};