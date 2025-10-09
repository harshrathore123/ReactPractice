export default function Rendering({isLoggedIn}){

    // IF CONDITION RENDERING

    // if(isLoggedIn){
    //     return(
    //         <>
    //         <h1>Welcome Again!</h1>
    //         </>
    //     )
    // }
    // return(
    //     <>
    //     <h1>Please loged in</h1>
    //     </>
    // )

    // Ternary Condition Rendering
    // return(
    //     <>
    //     {isLoggedIn?'Welcome Page':'Logged in again'}
    //     </>
    // )

    //Logical &&
    // return(
    //     <>
    //     {isLoggedIn&&'Welcome Page'}
    //     </>
    // )

    // Switch Condition Rendering
    switch(isLoggedIn){
        case {true}:
            return(
                <>
                <h1>Successfully Logged In</h1>
                </>
            )
        
        case {false}:
            return(
                <>
                <h1>Please Logged In</h1>
                </>
            )
        
        default:
            return(
                <>
                <h1>Something went wrong</h1>
                </>
            )
    }
}