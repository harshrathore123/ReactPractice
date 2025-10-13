export default function UseRefHook(){

    const focusInput = () =>{

    }
    return(
        <>
        <div className="coainer" style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"300px",flexDirection:"column"}}>
        <input type="text" placeholder="Please enter button to focus" style={{width:"600px"}} />
        <button onClick={focusInput}>Focus on Input</button>
        </div>

        </>
    )
}