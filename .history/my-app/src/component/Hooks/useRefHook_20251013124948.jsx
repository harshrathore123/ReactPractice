export default function UseRefHook(){

    const focusInput = () =>{

    }
    return(
        <>
        <div className="coainer">
        <input type="text" placeholder="Please enter button to focus" />
        <button onClick={focusInput}>Focus on Input</button>
        </div>

        </>
    )
}