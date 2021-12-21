import {useState, useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import BorderCard from './components/common/BorderCard';
import CounterCard from './components/common/CounterCard';
import Button from './components/common/Button';
import CounterBoxes from './components/Counter/CounterBoxes';
import axios from 'axios';

function App() {

  useEffect(() => {
    const _getNews = async () => {
      try { 
        const res = await axios.get('http://localhost:8080/api/test/news/react');
        console.log(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }

    _getNews();
  }, [])

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  } 

  const handleReduce = () => {
    setCount(count - 1);
  }

  return (
    <div className="App" style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Button onClick={handleReduce} style={{backgroundColor: 'red'}} disabled={count === 0} >
          <p>
            Remove
          </p>  
        </Button>
        <Button onClick={handleClick}>
          <p>Click Me!</p>
        </Button>
      </div>
      <div style={{width: "100%"}}>
        <CounterBoxes count={count}/>
      </div>
    </div>
  );
}

export default App;
