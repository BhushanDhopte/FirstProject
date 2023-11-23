
import { Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mens from './components/mens';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
       <Route  path='/mens' element={<Mens />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;