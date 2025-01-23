import React from 'react'
import {toast, Toaster} from 'react-hot-toast'
import { useContext } from 'react'
import { SizeContext } from './SizeContext'

const InCart = ({item, cart, setcart}) => {

    const{size, setShow} = useContext(SizeContext)

    const {title, author, price, img} = item

    const removeItem = (id)=>{
        // setcart((prevCart)=>{
        //     prevCart.filter((product)=> product.id !== id)
        // })
        toast.success("Removing.....")
    }
    return (

        
        <section>
            {toast.success("To go back click on MyShop")}

            <div className='cards'>
                <div className="image-box">
                    <img src={img} alt="product" />
                </div>
                <div className='details'>
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Price: {price} Rs</p>
                    <button onClick={()=> removeItem(item.id)}>Remove</button>
                    <button>+</button>
                    <button>-</button>
                </div>



            </div>

        </section>
        
    )
}

export default InCart
