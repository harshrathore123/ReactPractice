import { useReducer, useState } from "react"
import Increment from "./Increment";

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {counts:state.counts+1}
    }
}

export default function UseReduc(){
    const [count,setCount] = useState(0);
    const [state,dispatch] = useReducer(reducer,{counts:0});
    return(
        <>
        <h1>Count: {state.counts}</h1>
        {/* <button onClick={()=>setCount(count+1)} style={{width:"60px",margin:"10px"}}>+</button>
        <button onClick={()=>setCount(count-1)} style={{width:"60px",margin:"10px"}}>-</button>
        <button onClick={()=>setCount(0)} style={{width:"60px",margin:"10px"}}>Reset</button>
         */}

                 <button onClick={()=>dispatch({type:"increment"})} style={{width:"60px",margin:"10px"}}>+</button>
        {/* <button onClick={()=>setCount(count-1)} style={{width:"60px",margin:"10px"}}>-</button>
        <button onClick={()=>setCount(0)} style={{width:"60px",margin:"10px"}}>Reset</button> */}
        </>
    )
}