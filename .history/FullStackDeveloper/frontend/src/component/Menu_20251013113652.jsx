import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function Menu(){
    const [data,setData] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:3000/api/menu')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[data])

    return(
        <>
        <div className="container">
 <h1 style={{border:"2px solid red",boxShadow:"0 0 20px black"}}>
            {data}
        </h1>
        </div>
       
        </>
    )
}