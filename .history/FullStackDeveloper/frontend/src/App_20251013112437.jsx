import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {Toaster} from 'react-hot-toast';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/Signup'
import Dashboard from './component/Dashboard'
import { useEffect, useState } from 'react';
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const loggedIn = localStorage.getItem('isLoggedin') === 'true';
    setIsAuthenticated(loggedIn);
  },[])

  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster position='top-center'/>
    <Routes>
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/menu' element={}/>

      {/* Protected Route Logic Inline */}
      <Route path='/dashboard' element={
        isAuthenticated? <Dashboard/> : <Navigate to="/login" replace/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
