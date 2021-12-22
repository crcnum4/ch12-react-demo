import React from 'react';
import axios from 'axios';

const Counter = props => {
  const num = 1;

  return (
    <div>
      <p>This is box {props.count}</p>
    </div>
  )
}

export default Counter;