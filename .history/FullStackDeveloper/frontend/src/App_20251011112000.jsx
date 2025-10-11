import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import StartPage from './component/StartPage'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<StartPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
