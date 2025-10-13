export default function UseRefHook(){

    const focusInput = () =>{

    }
    return(
        <>
        <div className="coainer" style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"300px",flexDirection:"column"}}>
        <input type="text" placeholder="Please enter button to focus" style={{width:"400px",marginLeft:"260px"}} />
        <button onClick={focusInput} style={{width:"200px",}}>Focus on Input</button>
        </div>

        </>
    )
}