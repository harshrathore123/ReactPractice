import Animities from "./Aminities";
import Header from "./Header";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
export default function Home(){
    return(
        <>
        <Navbar/>
        <Header/>
        <Welcome/>
        <Animities/>
        </>
    )
}