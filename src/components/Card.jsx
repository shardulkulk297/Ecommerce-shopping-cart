import React from 'react'
import '../styles/Card.css'

const Card = ({ item, handleClick }) => {

    const { title, author, price, img } = item
    return (
        <div>
            <div className='cards'>
                <div className="image-box">
                    <img src={img} alt="product" />
                </div>
                <div className='details'>
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Price: {price} Rs</p>
                    <button onClick={() => { handleClick(item) }}>Add to Cart</button>
                </div>



            </div>

        </div>
    )
}

export default Card


