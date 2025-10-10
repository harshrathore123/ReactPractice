import './App.css'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import {BroswerRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    {/* <Dashboard/> */}
    {/* <Home/> */}
    {/* <Login/> */}
    <Signup/>
    </>
  )
}

export default App
