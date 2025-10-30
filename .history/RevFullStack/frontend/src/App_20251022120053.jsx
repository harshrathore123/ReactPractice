import './App.css'
import Home from './component/Home'
import Footer from './component/Footer'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './component/Dashboard';
import Dashboard_Navbar from './component/Dashboard_Navbar';
import Navbar from './component/Navbar';
import Aboutus from './page/Aboutus';
import Apartment from './page/Apartment';
import Aminities from './page/Aminities';
import Booking from './page/Bookings';
import Contact from './page/Contact';
import Login from './page/Login';
import Signup from './page/Signup';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedin') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <>
      <ToastContainer position="top-right" reverseOrder={false} />
      
      {/* Conditionally render navbar */}
      {isAuthenticated ? <Dashboard_Navbar /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/apartments' element={<Apartment isAuthenticated={isAuthenticated} />} />
        <Route path='/amenities' element={<Aminities />} />
        <Route path='/booking' element={
          isAuthenticated ? <Booking /> : <Navigate to='/login' replace />
        } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/register' element={<Signup />} />

        {/* Protected dashboard */}
        <Route path='/dashboard' element={
          isAuthenticated ? <Dashboard /> : <Navigate to='/login' replace />
        } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
