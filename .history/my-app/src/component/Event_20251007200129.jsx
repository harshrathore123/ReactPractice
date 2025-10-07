import { useState } from "react"

export default function Event(){
    const [data,setData] = useState();
    const printName = () =>{
        //alert,console.log
        alert();
        
    }

    return(
        <>
        <h1>Events Handling</h1>

        {/* Button */}
        <button onClick={printName}>Click Me</button>
        <p>{data}</p>
        </>
    )
}