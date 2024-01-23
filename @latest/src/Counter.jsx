import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0)
const increment =()=>{
    setCount(count + 1);
}
const decrement =()=>{
    setCount(count-1);
}

  return (
    <div>
      <p>Number of passengers in the bus is:{count}</p>
      <button onClick={increment}>Pick passenger</button>
      <button onClick={decrement}>Drop Passenger</button>
    </div>
  )
}

export default Counter
