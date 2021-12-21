import React from 'react';
import CounterBox from './CounterBox';

const CounterBoxes = (props) => {
  // props.count = a number
  // print out count boxes

  const displayBoxes = () => {
    const output = [];
    for (let count = 0; count < props.count; count++) {
      output.push(
        <CounterBox count={count} key={count} />
      )
    }
    return output;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: "row",
      flex: 1,
      flexWrap: 'wrap'
    }}>
      {displayBoxes()}
    </div>
  )

}

export default CounterBoxes;