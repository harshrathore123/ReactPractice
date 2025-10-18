import './FetchData.css';
export default function FetchData(){
    const arr = [
        {name:"harsh",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        {name:"akash",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        {name:"kapil",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        {name:"piyush",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        {name:"piyush",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        {name:"piyush",age:23,city:"Indore",img:"https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg"},
        
    ]
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