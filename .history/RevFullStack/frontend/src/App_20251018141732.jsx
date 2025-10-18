import './App.css'
import Home from './component/Home'
import {Toaster} from 'react-hot-toast';
function App(){
  return(
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <Home/>
    </>
  )
}

export default App
