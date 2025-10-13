import { useEffect } from "react"
import { useState } from "react"

export default function UseState_UseEffect(){
const [timer,setTimer] = useState(new Date().toLocaleString())
let time;
useEffect(()=>{
 time = setInterval(()=>{
    setTimer(new Date().toLocaleString())
},1000)

},[])

const clearTimerSet = () =>{
    clearTimerSet(time);
}
    return(
        <>
        <p>Live Clock</p>
        <p>{timer}</p>
        <button onClick={clearTimerSet}>ClearTime</button>
        </>
    )
}