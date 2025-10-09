import { useState } from 'react';
import './TodoList.css';
export default function TodoList() {

    //Create operation
    const [data,setData] = useState("");
    const [task,setTask] = useState([]);
    //Edit operation
    const [editdata,setEditData] = useState(null);

    const addtask = ()=>{

        if(editdata!=null){
            const updateText = [...task];   // 0,1,2 [0] = data
            updateText[editdata] = data;
            setTask(updateText);
            setEditData(null);
        }
        else{
        setTask((previous)=>[...previous,data]);
        }
        setData("");
    }

    const deleteData = (index)=>{
        // Checking button is working or not
        console.log(`Delete item successfully`);

        //Now putting here logic for deleteing list
        // filter  previous ===== task ==== array
        // filter is working when the condition is not matched it delete that item
        setTask((previous)=>{
            return(
            previous.filter((_,i)=>{
                return(
                i != index  // 1 == 1 -> delete
            )})
        )})
        // setTask((previous) => previous.filter((_, i) => i !== index));
    }

    const editData = (index)=>{
        // console.log(task_data);

        //Find the value of that index
        // const editdata = task[index];
        // console.log(editdata);
        setData(task[index]);
        setEditData(index);

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
                            <button onClick={()=>editData(index)}>Edit</button>
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