export default function useRefHook(){

    const focusInput = () =>{

    }
    return(
        <>
        <input type="text" placeholder="Please enter button to focus" />
        <button onClick={focusInput}>Focus on Input</button>
        </>
    )
}