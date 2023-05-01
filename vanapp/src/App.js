import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import VanDetail from './Pages/VanDetail';

import "./server"




function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
