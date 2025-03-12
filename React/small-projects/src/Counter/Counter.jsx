import React, { useState } from 'react'

export const Counter = (props) => {

    const {incr, decr} = props;
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+incr);
    }

    function decrement(){
        setCount (count-decr);
    }
    

  return (
    <div>
        <h2>Count :- {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
