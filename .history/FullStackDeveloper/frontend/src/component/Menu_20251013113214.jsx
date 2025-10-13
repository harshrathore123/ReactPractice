import axios from "axios"
import { useEffect } from "react"

export default function Menu(){

    useEffect(()=>{
        axios.get('http://localhost:3000/api/menu')
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    })

    return(
        <>
        <div className="container">
 <h1 style={{border:"2px solid red",boxShadow:"0 0 20px black"}}>
            Menu Card
        </h1>
        </div>
       
        </>
    )
}