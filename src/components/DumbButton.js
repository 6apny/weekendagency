import React from 'react';

export default props => {
  const buttonClassName = props.className ? `btn btn__${props.className}` :
    'btn';

  return(
    <div
      className={buttonClassName}
      onClick={props.handlerClick}
    >
      {props.title}
    </div>
  )
}