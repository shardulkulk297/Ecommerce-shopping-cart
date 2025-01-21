import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css'
const Navbar = ({size}) => {
  return (
    <nav>
        <div className="nav-box">
            <span className='my-shop'>
                My-shop
            </span>
            <div className="cart">
                <span>
                    <i className='fas fa-cart-plus'></i>
                    <span>{size}</span>
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
