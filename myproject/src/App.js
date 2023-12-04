
import { Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mens from './components/mens';
import SingleProduct from './components/Singleproduct';
import Cart from './components/cart';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
       <Route  path='/mens' element={<Mens />}/>
       <Route path='/single-product/:id' element={<SingleProduct />} />
       <Route  path='/cart' element={<Cart />}/>
       <Route path='/search/:query' element={<Search />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;