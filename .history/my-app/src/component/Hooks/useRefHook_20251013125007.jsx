export default function UseRefHook(){

    const focusInput = () =>{

    }
    return(
        <>
        <div className="coainer" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <input type="text" placeholder="Please enter button to focus" />
        <button onClick={focusInput}>Focus on Input</button>
        </div>

        </>
    )
}