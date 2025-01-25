import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { SizeContext } from './SizeContext'
import './InCart.css'
import { useNavigate } from 'react-router-dom'

const InCart = ({ item, cart, setcart }) => {
    // console.log(cart[0].amount);
    const navigate = useNavigate();
    
  

    useEffect(() => {

        toast.success("To go back click on MyShop")

    }, [])

    const [quantity, setquantity] = useState(1)
    const { size, setShow } = useContext(SizeContext)
    const { title, author, price, img } = item

    const itemPrice = price * quantity;
    const totalPrice = cart.reduce((total, currentItem) => { return total + currentItem.price * currentItem.amount }, 0);
    // console.log(totalPrice)

   
    const goToPayment = () => {
        navigate('/payments')
    }

    const removeItem = (id) => {

        setcart((prev) => {
            const updatedCart = prev.filter((product) => product.id !== id)

            if (updatedCart.length === 0) {
                navigate('/')
            }

            return updatedCart
        })

        if (size === 0) {
            setShow(true);
        }

        toast.success(`${title} removed from the cart`)
    }

    const incrementQty = (id) => {

        setcart((prevCart) => {
            const updatedCart = prevCart.map((items) =>
                items.id === id ? { ...items, amount: items.amount + 1 } : items
            )

            return updatedCart;
        })

    }

    const decrementQty = (id) => {
        setcart((prevCart) => {
            const updatedCart = prevCart.map((items) =>
                items.id === id && items.amount > 1 ? { ...items, amount: items.amount - 1 } : items

            )

            return updatedCart
        })

    }


    return (
        <>
            <div className='checkout'>
                <button onClick={goToPayment}>Checkout</button>
                <p>Total Products: {cart.length}</p>
                <p>Total: {totalPrice} Rs</p>

            </div>

            <div className='cart-page'>


                <div className='cards'>
                    <div className="image-box">
                        <img src={img} alt="product" />
                    </div>
                    <div className='details'>
                        <p>{title}</p>
                        <p>{author}</p>
                        <p>Price: {item.price * item.amount} Rs</p>
                        <p>Qty: {item.amount}</p>

                        <button onClick={() => removeItem(item.id)}>Remove</button>
                        <button onClick={() => incrementQty(item.id)}>+</button>
                        <button onClick={() => decrementQty(item.id)}>-</button>
                    </div>



                </div>

            </div>

        </>

    )
}

export default InCart
