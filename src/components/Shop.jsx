import React from 'react'
import List from '../list';
import Card from './Card';

const Shop = () => {
  return (
    <section>
        {List.map((item)=>{
            return <Card key={item.id} item={item} />
        })}
    </section>
  )
}

export default Shop
