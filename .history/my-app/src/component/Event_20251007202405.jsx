import { useState } from "react"

export default function Event({intro}){
    const [data,setData] = useState();
    const [name,setName] = useState();

    const printName = (introduction) =>{
        //alert,console.log
        alert('Hi I am Harsh');
        // let intro = 'Hi I am Harsh';
        console.log(introduction);           
        setData(introduction);
        
    }

    const firstName = ()=> {

    }

    return(
        <>
        <h1>Events Handling</h1>

        {/* Button - onClick */}
        <button onClick={()=>printName(intro)}>Click Me</button>
        <p>{data}</p>

        {/* Input - onChange = current time working */}
        <input type="text" placeholder="Enter name:" onChange={firstName} />
        <p>{name}</p>
        </>
    )
}