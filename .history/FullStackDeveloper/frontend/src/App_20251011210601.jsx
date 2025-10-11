import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Toaster} from 'react-hot-toast';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/Signup'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster position='top-center'/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/dashboard' element={}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
