import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  let increase = () => {
    if (count < 5) {
      setCount(precount =>precount+ 1);
        setCount(precount =>precount+ 1);  setCount(precount =>precount+ 1); 
    }
  }

  let decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={increase}>+1</button>

      <button onClick={decrease}>-1</button>
    </>
  )
}

export default App