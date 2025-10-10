import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
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
