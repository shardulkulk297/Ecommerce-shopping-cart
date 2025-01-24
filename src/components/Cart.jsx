import React, { useState } from 'react'
import Card from './Card';
import InCart from './InCart';


const Cart = ({ cart, setcart }) => {


    const [price, setprice] = useState(0);
    return (
        <section>
            {cart?.map((item) => {
                return <div className="cart-box" key={item.id}>
                    <div >
                        <InCart key={item.id} cart={cart} setcart={setcart}  item={item} />

                    </div>
                         </div>
            })}

        </section>
    )
}

export default Cart

