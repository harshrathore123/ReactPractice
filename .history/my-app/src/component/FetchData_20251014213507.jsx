import './FetchData.css';
export default function FetchData(){
    const arr = [
        {name:"harsh",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"}
    ]
    return(
        <>
        <div className="container">
 {arr.map((data)=>(
            <div className="card">
                <img src={data.img} alt="" />
            </div>
        ))}
        </div>
       
        </>
    )
}