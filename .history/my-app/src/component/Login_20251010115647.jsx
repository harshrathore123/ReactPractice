import { useNavigate } from "react-router-dom"
export default function Login(){
    const navigate = useNavigate();

    return(
        <>
        <h1>Welcome to Login Page</h1>
        <button>Login</button>  
        </>
    )
}