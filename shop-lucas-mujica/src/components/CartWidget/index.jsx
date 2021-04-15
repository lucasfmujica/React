import React from 'react'
import {useCart} from '../../context/CartContext'

const CartWidget = () => {
  const {totalItems} = useCart()

  return (
    <>
      {totalItems ? (
        <img
          style={{width: '30px'}}
          src='/images/shopping-cart-solid.svg'
          alt=''
        />
      ) : null}
    </>
  )
}

export default CartWidget
