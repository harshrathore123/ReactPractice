import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/Signup'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
