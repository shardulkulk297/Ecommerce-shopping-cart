import React, { useContext } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css'
import {toast, Toaster} from 'react-hot-toast';
import { SizeContext } from './SizeContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const {size, setShow} = useContext(SizeContext);
    const navigate = useNavigate();
    const showCart = ()=>{
        if(size === 0)
        {
            toast.error("CART IS EMPTY")
        }
        else{
            navigate('/cart')
        }
    }
  return (
    
    <nav>
        <div className="nav-box">
            <span onClick={()=>{navigate('/')}} className='my-shop'>
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
