import { useDispatch, useSelector } from "react-redux"
import { dec } from "../counterSlice/CounterSlicing";

export default function Decrement(){
    const count = useSelector((state)=>state.counte.count);
    const dispatch = useDispatch();
    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"370px"}}>Count: {count}</h1>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
                <button style={{width:"200px",margin:"10px"}} onClick={()=>dispatch(dec())}>Decrement</button>
        </div>
        </>
    )
}