import { useRef } from "react"

export default function UseRefHook(){
    const refe = useRef(null);

    const focusInput = () =>{
        refe.input.focus();
    }
    return(
        <>
        <div className="coainer" style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"300px",flexDirection:"column"}}>
        <input ref={refe} type="text" placeholder="Please enter button to focus" style={{width:"400px",marginLeft:"260px"}} />
        <button onClick={focusInput} style={{width:"200px",marginLeft:"370px",marginTop:"10px"}}>Focus on Input</button>
        </div>

        </>
    )
}