import logo from './logo.svg';
import './App.css';
import Test from './Pages/Home'
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';

import "./server"




function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
