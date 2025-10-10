import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const navigate = useNavigate();
    const gotoLogin = () =>{
        navigate('/login');
    }
    return(
        <>
        <h1>Welocome to Dashboard After Login</h1>
        <button onClick={()=>navigator('/login')}>Logout</button>
        <button onClick={gotoLogin}>Go To Login</button>
        </>
    )
}