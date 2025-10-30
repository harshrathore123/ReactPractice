import Animities from "./Aminities";
import Booking from "./Booking";
import CallUs from "./CallUs";
import Header from "./Header";
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