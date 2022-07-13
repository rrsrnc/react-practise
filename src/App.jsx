import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Calender from './Calender';
import Todo from'./components/Todo';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Calender' element={<Calender/>}/>
    </Routes>
    <Todo/>
    </>
  );
}

export default App;
