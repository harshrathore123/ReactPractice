import './App.css'
import Home from './component/Home'
import Footer from './component/Footer'
import {Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './component/Navbar';
import Aboutus from './page/Aboutus';
import Apartment from './page/Apartment';
import Aminities from './page/Aminities';
import Booking from './page/Bookings';
import Contact from './page/Contact';
function App(){
  return(
    <>
    <ToastContainer position="top-right" reverseOrder={false}/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/apartments' element={<Apartment/>}/>
      <Route path='/amenities' element={<Aminities/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
