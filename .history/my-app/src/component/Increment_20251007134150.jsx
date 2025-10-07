import { useState } from "react"

export default function Increment(){
    const[prev,curr] = useState(0);
    const inc = ()=>{

    }

    const dec = ()=>{

    }
    return(
        <>
        <p>Count: {prev}</p>


        <button onClick={inc()}>Increment</button>
        <button onClick={dec()}>Increment</button>

        </>
    )
}