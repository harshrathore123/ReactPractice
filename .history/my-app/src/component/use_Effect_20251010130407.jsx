import { useState,useEffect } from "react";
import axios from 'axios';
export default function use_Effect(){
    const [user,setUser] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))
    },[]);
    
    return(
        <>
        
        {user.map((users)=>{
            return(
            <li key={users.id}>{users.name}</li>
        )})}
        
        </>
    )
}