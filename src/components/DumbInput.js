import React from 'react';

export default props => {
  return(
    <input
      onClick={(e) => e.stopPropagation()}
      className={props.className}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handlerChange}
      name={props.name}
      type={props.password ? 'password' : 'text'}
    />
  );
};