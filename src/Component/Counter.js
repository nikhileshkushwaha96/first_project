import React ,{useState} from 'react'

function Counter1() {
    let initial =0
    let [count,setCount]=useState(initial)
  return (
    <div>
        <h2>count-{count}</h2>
        <button onClick={()=>setCount(pre=>pre+1)}>Inc</button>
        <button onClick={()=>setCount(pre=>pre-1)}>dec</button>
        <button onClick={()=>setCount(initial)}>reset</button>
    </div>
  );
  }

export default Counter1