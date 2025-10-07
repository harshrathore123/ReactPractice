import { useState } from "react"

export default function Form(){
    const [data,setData] = useState();

    const submitData = (e)=>{
        setData(e.target.value);
        alert(data);
    }
    return(
        <>
        <form onSubmit={submitData}>
            <input type="text" 
            placeholder="Enter name:"
            // onChange={(e)=>e.target.value}
            value={data}
            />
            <button type="submit">Click</button>
        </form>
        </>
    )
}