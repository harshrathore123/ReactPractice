import { useEffect, useState } from 'react';
import './Menu.css';
import axios from 'axios';
export default function Menu(){
const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/menu').
        then((res)=>
            {
                console.log(res.data);
                setData(res.data.result)
    }).
        catch((err)=>console.log(err))
    },[])
    const addcart = () =>{
        console.log(`Diease Name: ${data.item_name}, Price: ${data.price}, Description: ${data.description}`)
    }
    return(
        <>
        <div className="maincontainer">
 {data.map((data)=>(
    <div className="card_container">
            <div className="card">
                <img src={data.image_url} alt="" />
                <h1 className='name'>{data.item_name}</h1>
                <p className='age'>{data.description}</p>
                <p className='city'>{data.price}</p>
                <button onClick={addcart}>Add to Cart</button>
            </div>
        </div>

        ))}
       </div>
        </>
    )
}