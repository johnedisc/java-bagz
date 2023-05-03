import React from "react";

const componentStyle = {
  backgroundColor: 'black',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const login = {
  right: '1em',
  position: 'fixed'
}

export function Navbar(){
  return (
    <>
    <div className='flexed-row' style={componentStyle}>
      <h1>java bagz</h1>
      <h3 style={login}>login</h3>
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
