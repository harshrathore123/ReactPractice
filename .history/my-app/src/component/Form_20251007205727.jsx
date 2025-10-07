import { useState } from "react"

export default function Form(){
    const [data,setData] = useState();

    const submitData = (e)=>{
        e.preventDefault(); //rokta hai load hone se page ko
        alert(data);
    }
    return(
        <>
        <form onSubmit={submitData}>
            <input type="text" 
            placeholder="Enter name:"
            onChange={(e)=>setData(e.target.value)} //onchange nhi ho raha hai kyunki submit event lagaya hai
            value={data}
            />
            <button type="submit">Click</button>
        </form>
        </>
    )
}