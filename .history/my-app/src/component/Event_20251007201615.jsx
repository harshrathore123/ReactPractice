import { useState } from "react"

export default function Event({intro}){
    const [data,setData] = useState();
    const printName = (introduction) =>{
        //alert,console.log
        alert('Hi I am Harsh');

        // let intro = 'Hi I am Harsh';
        console.log(introduction);    
        
        setData(introduction);
        
    }

    return(
        <>
        <h1>Events Handling</h1>

        {/* Button */}
        <button onClick={()=>printName('Hi')}>Click Me</button>
        <p>{data}</p>
        </>
    )
}