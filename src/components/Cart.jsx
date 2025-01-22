import React, { useState } from 'react'

const Cart = ({cart, setcart}) => {

    const [price, setprice] = useState(0);
  return (
    <div>
        {cart?.map((item)=>{
            return <div className="cart-box" key={item.id}>
                <div className="cart-img">
                    <img src={item.img} alt="img" />
                    <p>{item.title}</p>

                </div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <button>Remove</button>
                </div>



            </div>
        })}
      
    </div>
  )
}

export default Cart

