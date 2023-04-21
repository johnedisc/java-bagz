const componentStyle = {
  backgroundColor: 'black',
  width: '100%'
}

export function Navbar(){
  return (
    <>
    <div className='flexed-row' style={componentStyle}>
      <h1>java bagz</h1>
    </div>
    </>
  );
}

export function Footer(){
  return (
    <>
    <div className='flexed-row' style={componentStyle}>
      <h3>footer</h3>
    </div>
    </>
  );
}
