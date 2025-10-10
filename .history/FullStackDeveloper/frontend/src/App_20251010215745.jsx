import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './component/Dashboard'
import StartPage from './component/StartPage'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
