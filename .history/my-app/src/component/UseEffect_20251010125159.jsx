import { useState,useEffect } from "react";
import axios from 'axios';
export default function UseEffect(){
    const [user,setUser] = useState("");
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))
    },[user]);
    
    return(
        <>
        <h1>Hi</h1>
        {user.map((data)=>{
            <li key={data.id}>{data.name}</li>
        })}
        </>
    )
}