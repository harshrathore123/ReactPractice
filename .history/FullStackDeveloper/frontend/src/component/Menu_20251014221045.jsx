import { useEffect, useState } from 'react';
import './Menu.css';
import axios from 'axios';
export default function Menu(){
const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/menu').
        then((res)=>setData(res.data)).
        catch((err)=>console.log(err))
    })
    return(
        <>
        <div className="maincontainer">
 {data.map((data)=>(
    <div className="card_container">
            <div className="card">
                <img src={data.img} alt="" />
                <h1 className='name'>{data.name}</h1>
                <p className='age'>{data.age}</p>
                <p className='city'>{data.city}</p>
            </div>
        </div>

        ))}
       </div>
        </>
    )
}