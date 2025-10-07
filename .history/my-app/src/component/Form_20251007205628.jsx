import { useState } from "react"

export default function Form(){
    const [data,setData] = useState();

    const submitData = (e)=>{
        e.preventDefault();
        alert(data);
    }
    return(
        <>
        <form onSubmit={submitData}>
            <input type="text" 
            placeholder="Enter name:"
            onChange={(e)=>setData(e.target.value)}
            value={data}
            />
            <button type="submit">Click</button>
        </form>
        </>
    )
}