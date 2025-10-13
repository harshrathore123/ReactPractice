import { useEffect } from "react"
import { useState } from "react"

export default function UseState_UseEffect(){
const [timer,setTimer] = useState()

useEffect(()=>{
setInterval(()=>{
    setTimer(new Date().toLocaleString())
},1000)
},[])
    return(
        <>
        <p>Live Clock</p>
        <p>{timer}</p>
        </>
    )
}