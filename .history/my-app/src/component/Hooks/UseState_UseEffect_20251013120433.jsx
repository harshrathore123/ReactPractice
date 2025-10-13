import { useState } from "react"

export default function UseState_UseEffect(){
const [timer,setTimer] = useState(new Date().toLocaleString())
    return(
        <>
        <p>Live Clock</p>
        <p>{timer}</p>
        </>
    )
}