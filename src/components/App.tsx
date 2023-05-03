import React from 'react';
import './../App.css'
import { Navbar } from './Navbar';
import { Footer } from './Navbar';
import { BeanControl } from './BeanControl';
import { Login } from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='container flexed-down'>        
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<BeanControl />} />
        </ Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
