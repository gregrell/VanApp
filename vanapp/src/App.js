import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import VanDetail from './Pages/VanDetail';
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';


import "./server"
import HostLayout from './Pages/Host/HostLayout';




function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/vans" element={<Vans/>}/>
              <Route path="/vans/:id" element={<VanDetail/>}/>
              <Route path="host" element={<HostLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="income" element={<Income/>}/>
                <Route path="reviews" element={<Reviews/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
