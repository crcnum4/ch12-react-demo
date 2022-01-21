import React from 'react';
import BorderCard from '../common/BorderCard';


const Developer = (props) => {
  const {name, cohort, id} = props.developer

  // const onSelect = () => {
  //   props.onSelect(id)
  // }

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      <p>{cohort}</p>
    </BorderCard>
  )
}

export default Developer;