import { useState } from 'react';
import './App.css'
import Navbar from './components/NavBar'
import Shop from './components/Shop'
import { Toaster, toast } from 'react-hot-toast';
function App() {
  
  const [cart, setcart] = useState([]);
  

  const handleClick = (item)=>{
    // console.log(item)
    let isPresent = false;

    cart.forEach((product)=>{
      if(item.id === product.id)
      {
        isPresent = true;
      }
    })

    if(isPresent){
      // console.log('Item Already present')
      toast.error('Item is Already in the Cart')
      return;
    }

    setcart([...cart, item] )
    
  }
  

  return (
    <>
    <Toaster position='top-center'></Toaster>
      <Navbar size={cart.length}/>
      <Shop handleClick={handleClick}/>
    </>
  )
}

export default App
