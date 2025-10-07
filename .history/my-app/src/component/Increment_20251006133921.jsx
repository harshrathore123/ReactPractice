import { useState } from "react"

export default function Increment(){
    const[prev,curr] = useState(0);
    return(
        <>
        <p>Count: {prev}</p>
        <button onClick={curr=(prev+1)}>Increment</button>
        </>
    )
}