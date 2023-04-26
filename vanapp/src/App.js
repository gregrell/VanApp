import logo from './logo.svg';
import './App.css';
import Test from './Pages/Home'
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';




function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
