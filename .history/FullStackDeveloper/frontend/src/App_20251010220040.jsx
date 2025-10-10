import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './component/Dashboard'
import StartPage from './component/StartPage'
import Signup from './component/Signup'
import Login from './component/Login'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
