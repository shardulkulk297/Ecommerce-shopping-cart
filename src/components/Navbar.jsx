import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css'
import {toast, Toaster} from 'react-hot-toast';

const Navbar = ({size, setShow}) => {

    const showCart = ()=>{
        if(size == 0)
        {
            setShow(true)
            toast.error("CART IS EMPTY")
        }
        else{
            setShow(false)
        }
    }
  return (
    
    <nav>
        <div className="nav-box">
            <span onClick={()=>{setShow(true)}} className='my-shop'>
                My-shop
            </span>
            <div className="cart">
                <span>
                    <i onClick={showCart} className='fas fa-cart-plus'></i>
                    <span>{size}</span>
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
