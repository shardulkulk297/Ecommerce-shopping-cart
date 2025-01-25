import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { SizeContext } from './SizeContext'
import './InCart.css'


const InCart = ({ item, cart, setcart }) => {
    // console.log(cart);

   

    useEffect(()=>{

        toast.success("To go back click on MyShop")

    }, [])

    const [quantity, setquantity] = useState(1)
    const { size, setShow } = useContext(SizeContext)
    const { title, author, price, img } = item

    const itemPrice = price * quantity;



    const removeItem = (id) => {
        // setcart((prevCart)=>{
        //     prevCart.filter((product)=> product.id !== id)
        // })
        setcart((prev) => {
           const updatedCart =  prev.filter((product) => product.id !== id)

           if(updatedCart.length === 0)
           {
            setShow(true);
           }

           return updatedCart
        })

        if (size === 0) {
            setShow(true);
        }

        toast.success(`${title} removed from the cart`)
    }
    return (
        <>
        
        
        <div className='cart-page'>
            

            <div className='cards'>
                <div className="image-box">
                    <img src={img} alt="product" />
                </div>
                <div className='details'>
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Price: {itemPrice} Rs</p>
                    <p>Qty: {quantity}</p>

                    <button onClick={() => removeItem(item.id)}>Remove</button>
                    <button onClick={()=> setquantity(quantity + 1)}>+</button>
                    <button onClick={()=> setquantity(quantity - 1)}>-</button>
                </div>



            </div>

        </div>
       
        </>

    )
}

export default InCart
