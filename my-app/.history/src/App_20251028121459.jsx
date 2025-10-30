import './App.css';
import Destructuring from './component/Desctructuing';
import FirstName from './component/FirstName';
import Increment from './component/Increment';
import Event from './component/Event';
import Form from './component/Form';
import Rendering from './component/Rendering';
import RenderingList from './component/RenderingList';
import TodoList from './component/TodoList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import UseEffect from './component/use_Effect';
import UseState_UseEffect from './component/Hooks/UseState_UseEffect';
import ClockWithControl from './component/Hooks/ClockWithControl';
import UseRefHook from './component/Hooks/useRefHook';
import FetchData from './component/FetchData';

// Import useContext and CreateContext from react
import { createContext } from 'react';
import Parent from './component/Parent';

// Hold createContext into MessageContext variable
export const MessageContext = createContext();
function App() {

  return (
    <MessageContext.Provider message="I am Harsh Rathore">
    {/* <FirstName name="Harsh Rathore" age="23"/>
    <Destructuring batch="mern" internship_exp="4month"/>
    <Increment/>
    <Event intro="Hi I am harsh rathore"/>
    <Form/>
    <Rendering isLoggedIn={false}/>
    <RenderingList/>

    <TodoList/> */}
  
  <BrowserRouter>
      <Routes>
        {/* Parent route for products */}
        <Route path="/products" element={<Products />}>
          {/* Nested route inside /products */}
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        {/* Nested another component inside dashboard */}
          <Route path='todolist' element={<TodoList/>}/>
          <Route path='useeffect' element={<UseEffect/>}/>
          <Route path='live_clock' element={<UseState_UseEffect/>}/>
          <Route path='clockwithcontrol' element={<ClockWithControl/>}/>
          <Route path='useRefHook' element={<UseRefHook/>}/>
          <Route path='fetchdata' element={<FetchData/>}/>
          <Route path='parent' element={<Parent/>}/>
        </Route>

      </Routes>
    </BrowserRouter>


    </MessageContext.Provider>
  )
}

export default App
