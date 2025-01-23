import React, { createContext, useEffect, useState } from 'react'

export const SizeContext = createContext();


export const SizeProvider = ({children, cart, setShow}) => {
    const size = cart.length;


  return (
    <SizeContext.Provider value = {{size, setShow}}>

        {children}
    </SizeContext.Provider>
  )
}


