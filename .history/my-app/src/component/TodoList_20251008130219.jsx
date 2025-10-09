import './TodoList.css';
export default function TodoList() {
    return (
        <>
        <div className='container'>
            <div className="todobox">
                <h2 id='headline'>TodoList</h2>
                <input type="text" placeholder='Enter task' id='task' />
                <button>Add Task</button>
            </div>
        </div>
        </>
    )
}