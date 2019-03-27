export const createOrUpdateRabbit = params => {
  return dispatch => {
    const { token, name, weight, id } = params;
    let url = `http://conquest.weekendads.ru/rabbit`;
    const options = {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: `rabbit[name]=${name}&rabbit[weight]=${weight}`
    };

    url = (typeof id !== 'undefined') ? `${url}/${id}` : url;

    fetch(url, options);
  };
};