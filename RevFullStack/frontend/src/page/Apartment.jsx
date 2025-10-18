import Room from "../component/Room";
import SearchBar from "../component/SearchBar";

export default function Apartment(){

    return(
        <>
        <SearchBar/>
        <div style={{marginTop:"210px"}}>
        <Room/>
        </div>
        </>
    )
}