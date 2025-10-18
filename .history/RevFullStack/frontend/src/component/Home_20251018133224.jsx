import Animities from "./Aminities";
import Booking from "./Booking";
import Header from "./Header";
import Navbar from "./Navbar";
import Room from "./Room";
import Subscribe from "./Subscribe";
import Welcome from "./Welcome";
export default function Home(){
    return(
        <>
        <Navbar/>
        <Header/>
        <Welcome/>
        <Animities/>
        <Room/>
        <Subscribe/>
        <Booking/>

        </>
    )
}