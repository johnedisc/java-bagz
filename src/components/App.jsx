import './../App.css'
import { Navbar } from './Navbar';
import { Footer } from './Navbar';
import { BeanControl } from './BeanControl';
import { Timer } from './Timer';

function App() {

  return (
    <>
      <div className='container flexed-down'>        
        <Navbar />
        <Timer />
        <BeanControl />
        <Footer />
      </div>
    </>
  )
}

export default App
