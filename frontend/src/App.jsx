import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'

import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Service from './components/Service'
import ContactCard from './components/ContactCard'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<ContactCard/>}/>
      </Routes>      
    </div>
  )
}

export default App
