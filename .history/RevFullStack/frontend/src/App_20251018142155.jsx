import './App.css'
import Home from './component/Home'
import {ToastContainer} from 'react-toastify';
function App(){
  return(
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <Home/>
    </>
  )
}

export default App
