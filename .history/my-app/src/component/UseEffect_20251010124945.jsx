import { useState,useEffect } from "react";
import axios from 'axios';
export default function useEffect(){
    const [user,setUser] = useState("");
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))
    },[user]);
    
    return(
        <>
        {user.map((data)=>{
            <li key={data.id}>{data}</li>
        })}
        </>
    )
}