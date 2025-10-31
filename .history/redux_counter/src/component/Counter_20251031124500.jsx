import { useDispatch, useSelector } from "react-redux"
import { inc } from "../counterSlice/CounterSlicing";

export default function Counter(){
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"370px"}}>Count: {count}</h1>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
            
            <button style={{width:"200px",margin:"10px"}} onClick={()=>dispatch(inc())}>Increment</button>
            <button style={{width:"200px",margin:"10px"}}>Decrement</button>
            <button style={{width:"200px",margin:"10px"}}>Reset</button>
        </div>
        </>
    )
}