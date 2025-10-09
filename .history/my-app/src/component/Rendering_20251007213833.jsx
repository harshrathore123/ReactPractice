export default function Rendering({isLoggedIn}){
    if({isLoggedIn}){
        return(
            <>
            <h1>Welcome Again!</h1>
            </>
        )
    }
    return(
        <>
        <h1>Please loged in</h1>
        </>
    )
}