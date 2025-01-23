import { useState } from 'react';
import './App.css'
import Navbar from './components/NavBar'
import Shop from './components/Shop'
import { Toaster, toast } from 
'react-hot-toast';
import Cart from './components/Cart';
import { createContext } from 'react';
import { SizeProvider } from './components/SizeContext';

function App() {
  
  const [cart, setcart] = useState([]);
  const [show, setShow] = useState(true);
  
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
      <SizeProvider   cart={cart}  setShow={setShow}>
        <Navbar />
     
      {/* <Navbar size={cart.length} setShow = {setShow}/> */}

      {
        show ? <Shop handleClick={handleClick}/> : <Cart  cart = {cart} setcart = {setcart}/>
      }
       </SizeProvider>
      
    </>
  )
}

export default App
