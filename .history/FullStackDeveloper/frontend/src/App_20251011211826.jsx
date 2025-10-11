import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {Toaster} from 'react-hot-toast';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/Signup'
function App() {
  const isAuthenticated = localStorage.getItem('isLoggedin');
  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster position='top-center'/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>

      {/* Protected Route Logic Inline */}
      <Route path='/dashboard' element={
        isAuthenticated? <Dashboard/> : <Navigate to="/login" replace/>}/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
