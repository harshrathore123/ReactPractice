import './App.css'
import Home from './component/Home'
import {routes,route} from 'react-dom';
import {ToastContainer} from 'react-toastify';
function App(){
  return(
    <>
    <ToastContainer position="top-right" reverseOrder={false}/>

    <routes>

    </routes>
    <Home/>

    </>
  )
}

export default App
