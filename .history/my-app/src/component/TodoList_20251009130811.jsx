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
            return(
            previous.filter((_,i)=>{
                return(
                i != index
            )})
        )})
        // setTask((previous) => previous.filter((_, i) => i !== index));
    }

    const editData = (index)=>{
        // console.log(task_data);

        //Find the value of that index
        const editdata = task_data;
        console.log(editdata);
        setData(editdata);
        addtask();        

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
                            <div className="buttons_edit_delete" style={{display:"flex",justifyContent:"space-between",width:'80px'}}>
                            <button onClick={()=>deleteData(index)}>Delete</button>
                            <button onClick={()=>editData(index,task_data)}>Edit</button>
                            </div>
                            
                        </li>
                        
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}