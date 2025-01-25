import React, { useState } from 'react'

import InCart from './InCart';
import './InCart.css'
import { useNavigate } from 'react-router-dom';


const Cart = ({ cart, setcart }) => {
    


    const [price, setprice] = useState(0);
    return (
        <>
          
        <section className='bill-cart'>
            
            {cart?.map((item) => {
                return <div className="cart-box" key={item.id}>
                    <div >
                       
                        <InCart key={item.id} cart={cart} setcart={setcart}  item={item} />

                    </div>
                         </div>
            })}

        </section>
        </>
    )
}

export default Cart

