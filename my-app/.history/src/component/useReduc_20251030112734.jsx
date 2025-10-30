import { useState } from "react"

export default function UseReduc(){
    const [count,setCount] = useState(0);
    return(
        <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}