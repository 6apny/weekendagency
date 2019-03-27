import {
  LOAD_RABBITS_REQUEST,
  LOAD_RABBITS_SUCCESS,
  LOAD_RABBITS_FAILURE
} from './actionTypes';

export const loadRabbitsReq = () => {
  return {
    type: LOAD_RABBITS_REQUEST
  };
};

export const loadRabbitsSuc = data => {
  return {
    type: LOAD_RABBITS_SUCCESS,
    payload: data
  };
};

export const loadRabbitsErr = () => {
  return {
    type: LOAD_RABBITS_FAILURE
  }
};

export const fetchRabbits = token => {
  return dispatch => {
    const url = 'http://conquest.weekendads.ru/rabbit/list';
    const options = {
      method: 'GET',
      headers: {"Authorization": `Bearer ${token}`}
    }

    dispatch(loadRabbitsReq());
    fetch(url, options)
      .then(data => data.json())
      .then(data => dispatch(loadRabbitsSuc(data)))
      .catch(e => dispatch(loadRabbitsErr()));
  }
};

export const removeRabbit = params => {
  return dispatch => {
    const { token, id, name, weight } = params;
    const url = `http://conquest.weekendads.ru/rabbit/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: `rabbit[name]=${name}&rabbit[weight]=${weight}`
    };

    fetch(url, options);
  }
};