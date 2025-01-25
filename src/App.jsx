import { useState } from 'react';
import './App.css'

import Shop from './components/Shop'
import { Toaster, toast } from
  'react-hot-toast';
import Cart from './components/Cart';
import { createContext } from 'react';
import { SizeProvider } from './components/SizeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './components/Payment';
import Navbar from './components/Navbar';

function App() {

  const [cart, setcart] = useState([]);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    // console.log(item)
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })

    if (isPresent) {
      // console.log('Item Already present')
      toast.error('Item is Already in the Cart')
      return;
    }

    setcart([...cart, item])

  }


  return (
    <>
      <Toaster position='top-center'></Toaster>
      <SizeProvider cart={cart} setShow={setShow}>
        <Navbar />

        
          <Routes>
            <Route index path="/" element={<Shop handleClick={handleClick} />} />
            <Route path='cart' element={<Cart cart={cart} setcart={setcart} />} />
            <Route path='payments' element={<Payment cart={cart} setcart={setcart} />} />

          </Routes>
      



        {/* <Navbar size={cart.length} setShow = {setShow}/> */}

        {/* {
        show ?  : />
      } */}
      </SizeProvider>

    </>
  )
}

export default App
