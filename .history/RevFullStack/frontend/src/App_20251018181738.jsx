import './App.css'
import Home from './component/Home'
import Footer from './component/Footer'
import {Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './component/Navbar';
import Aboutus from './page/Aboutus';
import Apartment from './page/Apartment';
function App(){
  return(
    <>
    <ToastContainer position="top-right" reverseOrder={false}/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/apartment' element={<Apartment/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
