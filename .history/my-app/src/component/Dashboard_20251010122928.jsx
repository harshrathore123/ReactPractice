import { Link,Outlet, useNavigate } from "react-router-dom"
export default function Dashboard({isValid}){
    const navigate = useNavigate();
    const gotoLogin = () =>{
        navigate('/login');
    }

    const todolistNavigate = () =>{
        navigate('/dashboard/todolist');
    }

    return(
        <>
        {isValid?navigate('/login')
        :navigate('/dashboard')}
        <h1>Welocome to Dashboard After Login</h1>

        <button onClick={()=>navigate('/login')}>Logout</button>
        <button onClick={gotoLogin}>Go To Login</button>

        <Link to="todolist">TodoList</Link>
        <button onClick={todolistNavigate}>TodoList Navigate</button>
        <Outlet/>
        </>
    )
}