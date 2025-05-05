import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Topheader from './components/Topheader'
import Booknow from './pages/Booknow'
import Contactus from './pages/Contactus'
import Crc from './components/Crc'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import Project from './pages/Project'



const App = () => {
  return (
    <div className=''>
      <div className=''>
      <Topheader/>
      </div>
   
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/project" element={<Project/>} />
      
      </Routes>
      <Crc/>
      <Footer/>
     
    </div>
  )
}

export default App

