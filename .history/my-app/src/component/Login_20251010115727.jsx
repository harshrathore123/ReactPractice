import { useNavigate } from "react-router-dom"
export default function Login(){
    const navigate = useNavigate();

    return(
        <>
        <h1>Welcome to Login Page</h1>
        {/* When i am click on login then it goes to dashboard */}
        <button onClick={()=>navigate('/dashboard')}>Login</button>  
        </>
    )
}