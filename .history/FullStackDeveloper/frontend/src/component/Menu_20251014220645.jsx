import './Menu.css';
export default function Menu(){

    return(
        <>
        <div className="maincontainer">
 {arr.map((data)=>(
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