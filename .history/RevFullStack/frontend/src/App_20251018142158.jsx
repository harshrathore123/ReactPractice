import './App.css'
import Home from './component/Home'
import {ToastContainer} from 'react-toastify';
function App(){
  return(
    <>
    <ToastContainer position="top-right" reverseOrder={false}/>
    <Home/>
    </>
  )
}

export default App
