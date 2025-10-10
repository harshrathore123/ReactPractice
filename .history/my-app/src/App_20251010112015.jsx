import './App.css';
import Destructuring from './component/Desctructuing';
import FirstName from './component/FirstName';
import Increment from './component/Increment';
import Event from './component/Event';
import Form from './component/Form';
import Rendering from './component/Rendering';
import RenderingList from './component/RenderingList';
import TodoList from './component/TodoList';
import {BroswerRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './component/Product';
import ProductDetails from './component/Product_Detail';

function App() {

  return (
    <>
    {/* <FirstName name="Harsh Rathore" age="23"/>
    <Destructuring batch="mern" internship_exp="4month"/>
    <Increment/>
    <Event intro="Hi I am harsh rathore"/>
    <Form/>
    <Rendering isLoggedIn={false}/>
    <RenderingList/>

    <TodoList/> */}
    <Router>
      <Routes>
        <Route path='/product' element={<Products/>}>
          <Route path=':id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Router>


    </>
  )
}

export default App
