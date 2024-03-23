import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarone from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Online from './components/Online';
import Public from './components/Public';
import Pagenot from './components/Pagenot';
import Health from './components/Health';
import Interview from './components/Interview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarone/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/online' element={<Online/>}/>
        <Route path='/Public' element={<Public/>}/>
        <Route path='/health' element={<Health/>}/>
        <Route path='/Interview' element={<Interview/>}/>
        <Route path='*' element={<Pagenot/>}/>
      </Routes>
   <Footer/>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
