import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import VanDetail from './Pages/VanDetail';
import Layout from './Components/Layout';
import NotFound404 from './Components/NotFound404';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail';

import "./server"
import HostLayout from './Pages/Host/HostLayout';
import HostVanDetailDetails from './Pages/Host/VanDetails/HostVanDetailDetails'
import HostVanDetailPricing from './Pages/Host/VanDetails/HostVanDetailPricing'
import HostVanDetailPhotos from './Pages/Host/VanDetails/HostVanDetailPhotos'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
              <Route path="*" element={<NotFound404/>}/>  {/* This is the catch all route 404 not found */}
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/vans" element={<Vans/>}/>
              <Route path="/vans/:id" element={<VanDetail/>}/>
              <Route path="host" element={<HostLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="income" element={<Income/>}/>
                <Route path="vans" element={<HostVans/>}/>
                <Route path="vans/:id" element={<HostVanDetail/>}>
                  <Route index element={<HostVanDetailDetails/>}/>
                  <Route path="pricing" element={<HostVanDetailPricing/>}/>
                  <Route path="photos" element={<HostVanDetailPhotos/>}/>
                </Route>
                <Route path="reviews" element={<Reviews/>}/>
              </Route>
            </Route>

  )
)


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>      
    </div>
  );
}

export default App;
