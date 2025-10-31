import { useDispatch, useSelector } from "react-redux"
import { inc,dec,reset } from "../counterSlice/CounterSlicing";

export default function Increment(){
    const count = useSelector((state)=>state.counte.count);
    const dispatch = useDispatch();
    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"370px"}}>Count: {count}</h1>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>            
            <button style={{width:"200px",margin:"10px"}} onClick={()=>dispatch(inc())}>Increment</button>
        </div>
        </>
    )
}