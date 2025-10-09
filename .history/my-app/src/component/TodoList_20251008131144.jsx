import './TodoList.css';
export default function TodoList() {
    return (
        <>
        <div className='container'>
            <div className="todobox">
                <h2 id='headline'>TodoList</h2>
                <input type="text" placeholder='Enter task' id='task' />
                <button className='addtask'>Add Task</button>
                <ul>
                    <li style={{color:"red",textAlign:"center"}}>Harsh</li>
                </ul>
            </div>
        </div>
        </>
    )
}