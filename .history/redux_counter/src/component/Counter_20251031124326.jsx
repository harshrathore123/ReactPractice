import { useSelector } from "react-redux"

export default function Counter(){
    const count = useSelector((state)=>state.count);
    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"370px"}}>Count: {count}</h1>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
            
            <button style={{width:"200px",margin:"10px"}}>Increment</button>
            <button style={{width:"200px",margin:"10px"}}>Decrement</button>
            <button style={{width:"200px",margin:"10px"}}>Reset</button>
        </div>
        </>
    )
}