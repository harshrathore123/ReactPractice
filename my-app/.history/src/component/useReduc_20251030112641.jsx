import { useState } from "react"

export default function UseReduc(){
    const [count,setCount] = useState(0);
    return(
        <>
        <button>+</button>
        <button>-</button>
        <button>Reset</button>
        </>
    )
}