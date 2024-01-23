import React, { useState } from 'react';
import "./Counter.css";

function Counter() {
const [count, setCount] = useState(0)
const increment =()=>{
    setCount(count + 1);
}
const decrement =()=>{
    setCount(count-1);
}

  return (
    <div className='container'>
      <p>Number of passengers in the bus is: {count}</p>
      <div className='btn-wrapper'>
      <button onClick={increment}>Pick passenger</button>
      <button onClick={decrement}>Drop Passenger</button>
      </div>
    </div>
  )
}

export default Counter
