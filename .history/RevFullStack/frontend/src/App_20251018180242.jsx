import './App.css'
import Header from './component/Header'
import {Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './component/Navbar';
function App(){
  return(
    <>
    <ToastContainer position="top-right" reverseOrder={false}/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
