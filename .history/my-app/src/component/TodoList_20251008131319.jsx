import './TodoList.css';
export default function TodoList() {

    //Create operation

    return (
        <>
        <div className='container'>
            <div className="todobox">
                <h2 id='headline'>TodoList</h2>
                <input type="text" placeholder='Enter task' id='task' />
                <button className='addtask'>Add Task</button>
            </div>
        </div>
        </>
    )
}