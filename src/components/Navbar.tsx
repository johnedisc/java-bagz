import React, { useState } from "react";
import { Link } from "react-router-dom";

const componentStyle = {
  backgroundColor: 'black',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const loginStyle = {
  right: '2em',
  position: 'fixed',
  textDecoration: 'none'
}

export function Navbar(){
  const [logStatus, setLogStatus] = useState('login');

  return (
    <>
    <div className='flexed-row' style={componentStyle}>
      <h1>java bagz</h1>
      <Link to="/login" className="flexed-row" style={loginStyle}>
        <h3>{logStatus}</h3>
      </Link>
    </div>
    </>
  );
}

export function Footer(){
  const footStyle = {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'space-around',
  }

  return (
    <>
    <div className='flexed-row' style={footStyle}>
      <h3>thanks for reading</h3>
      <h3>no vibing, please</h3>
    </div>
    </>
  );
}
