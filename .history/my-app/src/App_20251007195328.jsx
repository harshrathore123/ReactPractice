import './App.css';
import Destructuring from './component/Desctructuing';
import FirstName from './component/FirstName';
import Increment from './component/Increment';

function App() {

  return (
    <>
    <FirstName name="Harsh Rathore" age="23"/>
    <Destructuring batch="mern" internship_exp="4month"/>
    <Increment/>
    <Event/>
    </>
  )
}

export default App
