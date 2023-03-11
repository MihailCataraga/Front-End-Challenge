import React from 'react';

export default function Key(props) {
  return (
    <div
        className={props.class + ' d-flex a-center j-center'}>
        <h4>{props.secName}</h4>
        <h4>{props.name}</h4>
    </div>
  )
}

