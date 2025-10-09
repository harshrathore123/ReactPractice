import { useState } from 'react';
import './TodoList.css';
export default function TodoList() {

    //Create operation
    const [data,setData] = useState("");
    const [task,setTask] = useState([]);
    const addtask = ()=>{
        setTask((previous)=>[...previous,data]);
        setData("");
    }

    const deleteData = (index)=>{
        // Checking button is working or not
        console.log(`Delete item successfully`);

        //Now putting here logic for deleteing list
        // filter
        setTask((previous)=>{
            previous.filter((_,i)=>(
                i != index
            ))
        })
        // setTask((previous) => previous.filter((_, i) => i !== index));
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
                        <li key={index}>{task_data}
                            <button onClick={()=>deleteData(index)}>Delete</button>
                        </li>
                        
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}