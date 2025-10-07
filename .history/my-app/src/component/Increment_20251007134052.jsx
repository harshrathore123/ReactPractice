import { useState } from "react"

export default function Increment(){
    const[prev,curr] = useState(0);
    return(
        <>
        <p>Count: {prev}</p>

        {/* Condition Rendering */}
        {prev>=0?
        <button onClick={()=>curr(prev+1)}>Increment</button>
        :
                    <button onClick={()=>curr(prev-1)}>Increment</button>
        }
        


        </>
    )
}