import React, { useState } from 'react'

export const CounterNew = () => {
    const [counter, setCounter] = useState(0)

    // if counter value is not greater than 20 and not smaller than 0.

    const addValue=()=>{
        if(counter < 20 ){
            setCounter(counter+1)
        }
    }

    const removeValue=()=>{
        if(counter > 0){
            setCounter(counter-1)
        }
    }
  return (
    <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <button onClick={addValue}>Add</button>
        <h3>Counter Value is: {counter}</h3>
        <button onClick={removeValue}>Remove</button>
    </div>
  )
}
