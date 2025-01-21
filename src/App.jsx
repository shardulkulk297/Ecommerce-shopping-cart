import { useState } from 'react';
import './App.css'
import Navbar from './components/NavBar'
import Shop from './components/Shop'
function App() {
  
  const [cart, setcart] = useState([]);

  const handleClick = (item)=>{

    console.log(item);
    
  }
  

  return (
    <>
      <Navbar size={cart.length}/>
      <Shop handleClick={handleClick}/>
    </>
  )
}

export default App
