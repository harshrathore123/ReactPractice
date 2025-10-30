import { useState } from "react"

export default function UseReduc(){
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)} style={{width:"60px",margin:"10px"}}>+</button>
        <button onClick={()=>setCount(count-1)} style={{width:"60px",margin:"10px"}}>-</button>
        <button onClick={()=>setCount(0)} style={{width:"60px",margin:"10px"}}>Reset</button>
        </>
    )
}