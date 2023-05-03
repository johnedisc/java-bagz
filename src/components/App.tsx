import React from 'react';
import './../App.css'
import { Navbar } from './Navbar';
import { Footer } from './Navbar';
import { BeanControl } from './BeanControl';

function App() {

  return (
    <>
      <div className='container flexed-down'>        
        <Navbar />
        <BeanControl />
        <Footer />
      </div>
    </>
  )
}

export default App
