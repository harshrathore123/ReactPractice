import { useState } from 'react';
import './TodoList.css';
export default function TodoList() {

    //Create operation
    const [data,setData] = useState("");
    const [task,setTask] = useState([]);
    const addtask = ()=>{
        // if(data.trim() === "") return;
        setTask((prevTask)=>[...prevTask,data]);
        setData("");
        // console.log(task);
    }
    return (    
        <>
        <div className='container'>
            <div className="todobox">
                <h2 id='headline'>TodoList</h2>

                <input type="text" 
                placeholder='Enter task' 
                id='task' 
                value={data}
                onChange={(e)=>setData(e.target.value)}
                />

                <button className='addtask' onClick={addtask}>Add Task</button>

                <ul className='ul_list'>
                    {task.map((task_data,index)=>{
                        return(
                        <li key={index}>{task_data}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}