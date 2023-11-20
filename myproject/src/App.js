
import './App.css';
import {Route, Routes,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='./' elements={<HomePage />} />
        <Route path='./register' element={<Register/>} />
        <Route path='./login'elements={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
