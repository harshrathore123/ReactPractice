import { useReducer, useState } from "react"
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {counts:state.counts+1}
        
        case 'decrement':
            return {counts:state.counts-1}
        
        case 'reset':
            return {counts:0}

        default:
            return state;
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
        <button onClick={()=>dispatch({type:"decrement"})} style={{width:"60px",margin:"10px"}}>-</button>
        <button onClick={()=>dispatch({type:"reset"})} style={{width:"60px",margin:"10px"}}>Reset</button>
        </>
    )
}