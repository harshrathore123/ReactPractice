import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const navigate = useNavigate();
    const gotoLogin = () =>{
        navigate('/login');
    }
    const gotoTodo = ()=>{
        navigate('/todolist');
    }
    return(
        <>
        <h1>Welocome to Dashboard After Login</h1>
        <button onClick={()=>navigate('/login')}>Logout</button>
        <button onClick={gotoLogin}>Go To Login</button>
        <button onClick={gotoTodo}>Go to Todo</button>
        </>
    )
}