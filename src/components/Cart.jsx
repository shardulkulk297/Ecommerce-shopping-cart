import React, { useState } from 'react'
import Card from './Card';
const Cart = ({ cart, setcart }) => {


    const [price, setprice] = useState(0);
    return (
        <div>
            {cart?.map((item) => {
                return <div className="cart-box" key={item.id}>
                    <div >
                        <Card key={item.id}  item={item} />

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

