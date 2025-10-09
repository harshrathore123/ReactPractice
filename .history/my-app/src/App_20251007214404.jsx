import './App.css';
import Destructuring from './component/Desctructuing';
import FirstName from './component/FirstName';
import Increment from './component/Increment';
import Event from './component/Event';
import Form from './component/Form';
import Rendering from './component/Rendering';

function App() {

  return (
    <>
    <FirstName name="Harsh Rathore" age="23"/>
    <Destructuring batch="mern" internship_exp="4month"/>
    <Increment/>
    <Event intro="Hi I am harsh rathore"/>
    <Form/>
    <Rendering isLoggedIn={true}/>
    </>
  )
}

export default App
