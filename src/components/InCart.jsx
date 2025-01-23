import React from 'react'
import {toast, Toaster} from 'react-hot-toast'

const InCart = ({item}) => {

    const {title, author, price, img} = item
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
                    <button onClick={() => { handleClick(item) }}>Remove</button>
                    <button>+</button>
                    <button>-</button>
                </div>



            </div>

        </section>
    )
}

export default InCart
