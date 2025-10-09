import { useState } from 'react';
import './TodoList.css';
export default function TodoList() {

    //Create operation
    const [data,setData] = useState();
    const addtask = ()=>{
        const arr = [{}];
        arr.push(data);
    }
    return (
        <>
        <div className='container'>
            <div className="todobox">
                <h2 id='headline'>TodoList</h2>

                <input type="text" 
                placeholder='Enter task' 
                id='task' 
                onChange={(e)=>setData(e.target.value)}
                />

                <button className='addtask' onClick={addtask}>Add Task</button>

                <ul>
                    {arr.map((data)=>{
                        <li>{data}</li>
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}