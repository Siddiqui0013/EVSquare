import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import About from './components/AboutUs'
import Contact from './components/Contact'
import Home from './components/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Blogs' element={<Blogs/>}/>
        <Route path='Navbar' element={<Navbar/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Projects' element={<Projects/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

