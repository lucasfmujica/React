import React from 'react'
import {useCart} from '../../context/CartContext'

const CartWidget = () => {
  const {totalItems} = useCart()

  return (
    <>
      {totalItems ? (
        <>
          <img
            style={{width: '30px'}}
            src='/images/shopping-cart-solid.svg'
            alt=''
          />
          <div className=' text-red-500 bg-gray-300 rounded-full ml-1 border-gray-300'>
            {totalItems}
          </div>
        </>
      ) : null}
    </>
  )
}

export default CartWidget
