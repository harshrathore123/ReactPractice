import { useState } from "react";
import { useRef } from "react"

export default function UseRefHook(){
    const [data,setData] =  useState("");
    const refe = useRef(null);

    const focusInput = () =>{
        refe.current.focus();
        refe.current.value = data;
    }
    return(
        <>
        <div className="coainer" style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"300px",flexDirection:"column"}}>
        <input type="text" placeholder="Enter name:" value={data} onChange={(e)=>setData(e.target.value)}/>
        <input ref={refe} type="text" placeholder="Please enter button to focus" style={{width:"400px",marginLeft:"260px"}} />
        <button onClick={focusInput} style={{width:"200px",marginLeft:"370px",marginTop:"10px"}}>Focus on Input</button>
        <button onClick={handleclick}>Click Me</button>
        </div>

        </>
    )
}