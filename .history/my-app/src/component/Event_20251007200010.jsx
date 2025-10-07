import { useState } from "react"

export default function Event(){
    const [data,setData] = useState();

    return(
        <>
        <h1>Events Handling</h1>

        {/* Button */}
        <button>Click Me</button>
        <p>{data}</p>
        </>
    )
}