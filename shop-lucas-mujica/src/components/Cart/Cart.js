/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import Button from '@material-ui/core/Button'
import {useCart} from '../../context/CartContext'

export const Cart = () => {
  const {cart, removeItem, totalItems, totalPrecio, clear} = useCart()

  return (
    <div className='cartContainer'>
      {!cart.length ? (
        <h2 className='emptyCart'>
          No hay items en el carrito,{' '}
          <Link to='/' className='cartLink'>
            haz click aqui para volver a la home
          </Link>
        </h2>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div key={cartItem.item.id}>
              <h3 className='title'>Producto: {cartItem.item.name}</h3>
              <p className='quantity'>Cantidad: {cartItem.quantity}</p>
              <p className='quantity'>Precio: ${cartItem.item.price}</p>

              <Button
                onClick={() => removeItem(cartItem.item.id)}
                variant='contained'
                color='primary'
              >
                Borrar
              </Button>
            </div>
          ))}
          <div className='total'>
            <p>
              La cantidad que llevás es: {totalItems} productos y el precio
              total de tu compra es: ${totalPrecio}
            </p>
            <Button onClick={clear} variant='contained' color='primary'>
              Eliminar todos los items
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
