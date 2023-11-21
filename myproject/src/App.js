
import { Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
    </div>
  );
}

export default App;