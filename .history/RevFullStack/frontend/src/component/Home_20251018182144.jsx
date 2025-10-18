import Animities from "./Aminities";
import Booking from "./Booking";
import CallUs from "./CallUs";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Room from "./Room";
import Subscribe from "./Subscribe";
import Welcome from "./Welcome";
export default function Home(){
    return(
        <>
        <Header/>
        <Welcome/>
        <Animities/>
        <Room/>
        <Subscribe/>
        <Booking/>
        <CallUs/>
        </>
    )
}