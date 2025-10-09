import { useState } from 'react';
import './TodoList.css';
export default function TodoList() {

    //Create operation
    const [data,setData] = useState("");
    const [task,setTask] = useState([]);
    const addtask = ()=>{
        if(data.trim() === "") return;
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

                <ul style={{position:"absolute",border:"2px solid red",width:"200px",height:"auto"}}>
                    <li>Harsh</li>
                    {task.map((data,index)=>{
                        <li key={index}>{data}</li>
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}