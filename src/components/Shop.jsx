import React from 'react'
import List from '../list';
import Card from './Card';

const Shop = ({handleClick}) => {
  return (
    <section className='main-cart'>
        {List.map((item)=>{
            return <Card key={item.id} handleClick={handleClick}  item={item} />
        })}
    </section>
  )
}

export default Shop
