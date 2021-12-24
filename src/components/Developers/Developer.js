import React from 'react';
import BorderCard from '../common/BorderCard';

const Developer = (props) => {

  const {name, cohort} = props.developer

  return (
    <BorderCard>
      <h2>{name}</h2>
      <p>{cohort}</p>
    </BorderCard>
  )
}

export default Developer;