import React, {useState} from 'react';
import Counter from '../Counter/Counter';

const CounterCard = (props) => {

  const [count, setCount] = useState(0);

  // const count = 24;

  return (
    <div
      style={styles.card}
      onClick={() => setCount(count + 1)}
    >
      <Counter count={count} />
    </div>
  )

}

const styles = {
  card: {
    border: "1px solid #171717",
    borderRadius: 5,
    margin: '10px',
    padding: '10px',
    width: "80%",
    maxWidth: 500,
    backgroundColor: "lightblue",
    boxShadow: '1px 1px 20px rgba(91, 91, 91, 0.5)'
  }
}

export default CounterCard;