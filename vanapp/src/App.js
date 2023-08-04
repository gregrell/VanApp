import './App.css';
import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import VanDetail, { vanDetailLoader } from './Pages/VanDetail';
import Layout from './Components/Layout';
import NotFound404 from './Pages/NotFound404';
import Dashboard, { hostDashboardLoader } from './Pages/Host/Dashboard';
import Income, { hostIncomeLoader } from './Pages/Host/Income';
import Reviews, { reviewsLoader } from './Pages/Host/Reviews';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail, { hostVanDetailLoader } from './Pages/Host/HostVanDetail';
import Error from './Components/Error'
import Login, {loader as loginLoader, action as loginAction} from './Pages/Login';

import "./server"
import HostLayout from './Pages/Host/HostLayout';
import HostVanDetailDetails, { hostVanDetailDetailsLoader } from './Pages/Host/VanDetails/HostVanDetailDetails'
import HostVanDetailPricing, { hostVanDetailPricingLoader } from './Pages/Host/VanDetails/HostVanDetailPricing'
import HostVanDetailPhotos, { hostVanDetailPhotosLoader } from './Pages/Host/VanDetails/HostVanDetailPhotos'

import ProtectedLayout from './Components/ProtectedLayout';



/* Data Loaders Here */
import { loader as vansLoader } from './Pages/Vans';
import { HostVansloader } from './Pages/Host/HostVans';

const router = createBrowserRouter(
  createRoutesFromElements(
            <Route path="/" element={<Layout/>}>
              <Route path="*" element={<NotFound404/>}/>  {/* This is the catch all route 404 not found */}
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
              <Route path="/vans/:id" element={<VanDetail/>} loader={vanDetailLoader} errorElement={<Error/>}/>
              <Route path="/login" element={<Login/>} loader={loginLoader} action={loginAction} errorElement={<Error/>}/>              
              <Route path="host" element={<HostLayout/>}>
                <Route element={<ProtectedLayout/>}>      {/* Protected routes start here */}
                  <Route index element={<Dashboard/>} loader={hostDashboardLoader} errorElement={<Error/>}/>
                  <Route path="income" element={<Income/>} loader={hostIncomeLoader} errorElement={<Error/>}/>
                  <Route path="vans" element={<HostVans/>} loader={HostVansloader} errorElement={<Error/>}/>
                  <Route path="vans/:id" element={<HostVanDetail/>} loader={hostVanDetailLoader} errorElement={<Error/>}>
                    <Route index element={<HostVanDetailDetails/>} loader={hostVanDetailDetailsLoader} errorElement={<Error/>}/>
                    <Route path="pricing" element={<HostVanDetailPricing/>} loader={hostVanDetailPricingLoader} errorElement={<Error/>}/>
                    <Route path="photos" element={<HostVanDetailPhotos/>} loader={hostVanDetailPhotosLoader} errorElement={<Error/>}/>
                  </Route>
                  <Route path="reviews" element={<Reviews/>} loader={reviewsLoader} errorElement={<Error/>}/>
                </Route>                                  {/* Protected routes end here */}
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
