import React from 'react'
import BorderCard from '../common/BorderCard';
import Counter from './Counter';

const CounterBox = (props) => {
  return (
    <BorderCard>
      <Counter count={props.count}/>
    </BorderCard>
  )
}

export default CounterBox;